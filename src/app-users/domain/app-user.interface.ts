import { Document } from "mongoose";

export interface AppUser extends Document{
    id:number,
    name:string,
    password:string
}