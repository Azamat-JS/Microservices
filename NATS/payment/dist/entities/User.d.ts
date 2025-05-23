import { PaymentEntity } from "./Payment";
export declare class UserEntity {
    id: string;
    username: string;
    displayName?: string;
    email: string;
    payments: PaymentEntity[];
}
