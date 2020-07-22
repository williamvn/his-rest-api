import { Address } from "./address.interface";

export enum Gender{
    M="M",
    F= "F"
}
export interface User {
    id: number;
    name: string;
    lastName: string;
    secondLastName: string;
    gender: Gender;
    birthDay: Date;
    documentationId: string;
    address: Address;
}
