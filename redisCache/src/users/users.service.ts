import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class UsersService {

 async findAll() {
    const response = await axios
    .get(`https://reqres.in/api/users`, {
      headers: {
        "x-api-key":"reqres-free-v1"
      }
 })
 .then((res) => res.data);
 console.log('this from api')    
 return response;
  }
}
