import { SocialMedia } from "@app/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column('jsonb', { default: {} })
  socialMedia: SocialMedia;

  @Column({ default: false })
  subscribed: boolean;
}
