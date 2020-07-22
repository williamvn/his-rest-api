import { AddressDTO } from "./address.dto";

export enum ProfessionalType{ 
    Doctor ="Médico",
    Nurse = "Enfermero",
    Admin = "Administrativo"
}
export enum Gender{
    M="M",
    F= "F"
}
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