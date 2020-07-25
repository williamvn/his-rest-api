import { AddressDTO } from "./address.dto";
import { Gender } from "../domain/user.interface";
import { ProfessionalType } from "../domain/professional.interface";
import { IsNotEmpty, IsDateString, ValidateNested, IsString, IsEnum, IsOptional, Validate } from "class-validator";
import { Type } from "class-transformer";
import { IsDocumentId } from "../custom-validators/document-id.validator";



export class ProfessionalDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsOptional()
    secondLastName: string;

    @IsEnum(Gender, {
        message: "the Gender should be 'M', 'F' or null"
    })
    @IsOptional()
    gender: Gender;

    @IsDateString()
    @IsOptional()
    birthDay: Date;

    @Validate(IsDocumentId)
    documentationId: string;

    @ValidateNested()
    @Type(() => AddressDTO)
    address: AddressDTO;

    @IsNotEmpty()
    noCollegiate: string;

    @IsEnum(ProfessionalType, {
        message: "the professional's type must be: 'Enfermero', 'Médico', 'Adminsitrativo' or null"
    })
    @IsOptional()
    type: ProfessionalType;
}