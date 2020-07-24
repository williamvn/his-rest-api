import { Address } from "./address.interface";
import { Document } from "mongoose";


export enum Gender{
    M="M",
    F= "F"
}
export interface User extends Document {
    name: string;
    lastName: string;
    secondLastName: string;
    gender: Gender;
    birthDay: Date;
    documentationId: string;
    address: Address;
}
