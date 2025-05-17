import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PaymentEntity } from "./Payment";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false})
    username: string;

    @Column({nullable:true})
    displayName?:string;

    @Column({nullable:false})
    email:string;

    @OneToMany(() => PaymentEntity, (payment) => payment.user)
    @JoinColumn()
    payments: PaymentEntity[];
}