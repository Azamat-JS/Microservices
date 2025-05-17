import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./User";

@Entity()
export class PaymentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    amount: number;

    @ManyToOne(() => UserEntity, (user) => user.payments)
    @JoinColumn()
    user: UserEntity;
}