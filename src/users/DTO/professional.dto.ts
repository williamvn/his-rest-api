import { AddressDTO } from "./address.dto";
import { Gender } from "../domain/user.interface";
import { ProfessionalType } from "../domain/professional.interface";



export interface ProfessionalDTO{
    id: number;
    name: string;
    lastName: string;
    secondLastName: string;
    gender: Gender;
    birthDay: Date;
    documentationId: string;
    address: AddressDTO;
    noCollegiate: string;
    type: ProfessionalType;
}