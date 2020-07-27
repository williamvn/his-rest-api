import { Document } from "mongoose";

export interface AppUser extends Document{
    _id:number,
    name:string,
    password:string
}