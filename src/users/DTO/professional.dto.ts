import { AddressDTO } from "./address.dto";
import { Gender } from "../domain/user.interface";
import { ProfessionalType } from "../domain/professional.interface";
import { IsNotEmpty, IsDateString, ValidateNested, IsDefined, Contains, Length, IsString, IsEnum, IsOptional } from "class-validator";
import { Type } from "class-transformer";



export class ProfessionalDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsOptional()
    secondLastName: string;

    @IsEnum(Gender, {
        message:"the Gender should be 'M', 'F' or null"
    })
    @IsOptional()
    gender: Gender;
    
    @IsDateString()
    @IsOptional()
    birthDay: Date;
    
    documentationId: string;

    @ValidateNested()
    @Type(()=>AddressDTO)
    address: AddressDTO;
    
    @IsNotEmpty()
    noCollegiate: string;

    @IsEnum(ProfessionalType, {
        message:"the professional's type must be: 'Enfermero', 'Médico', 'Adminsitrativo' or null"
    })
    @IsOptional()
    type: ProfessionalType;
}