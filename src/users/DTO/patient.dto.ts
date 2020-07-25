import { InsuranceCarrierDTO } from './insurance-carrier.dto';
import { AddressDTO } from "./address.dto";
import { Gender } from '../domain/user.interface';
import {IsNotEmpty, IsDateString, ValidateNested, IsEnum, IsOptional, Validate} from 'class-validator';
import { Type } from 'class-transformer';
import { IsDocumentId } from '../custom-validators/document-id.validator';

export class PatientDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    secondLastName: string;

    @IsEnum(Gender, {
        message:"The gender should be 'M', 'F' or null"
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
    NHC: string;

    @ValidateNested()
    @Type(()=>InsuranceCarrierDTO)
    insuranceCarriers: InsuranceCarrierDTO[];
}

