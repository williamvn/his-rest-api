import { InsuranceCarrierDTO } from './insurance-carrier.dto';
import { AddressDTO } from "./address.dto";
import { Gender } from '../domain/user.interface';
import {Length, IsDate, IsNotEmpty, IsDateString, ValidateNested, IsString, IsEnum, Allow, IsOptional} from 'class-validator';
import { Type } from 'class-transformer';

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

