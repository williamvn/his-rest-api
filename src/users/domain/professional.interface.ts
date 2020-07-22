import { User } from './user.interface';

export enum ProfessionalType{ 
    Doctor ="Médico",
    Nurse = "Enfermero",
    Admin = "Administrativo"
}
export interface Professional extends User{
    noCollegiate: string;
    type: ProfessionalType;
}