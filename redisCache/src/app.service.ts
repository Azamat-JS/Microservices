import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios'
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}
 async getHello(): Promise<any> {
  const cachedValue = await this.cacheManager.get('my_test_key');
  if(cachedValue){
    console.log('this from cache')    
    return cachedValue;
  }
    const response = await axios
    .get(`https://reqres.in/api/users`, {
      headers: {
        "x-api-key":"reqres-free-v1"
      }
 })
    .then((res) => res.data);
    await this.cacheManager.set('my_test_key', response, 5000);
    console.log('this from api')    
    return response;
  }
}
