import { InsuranceType } from "../domain/insurance-carrier.interface";
import { IsString, IsEnum, IsOptional } from "class-validator";

export class InsuranceCarrierDTO {
    name: string;
    @IsEnum(InsuranceType, {
        message: "Insurance's Type are: 'Salud', 'Dental', 'Family' or 'null'"
    })
    @IsOptional()
    type: InsuranceType;
    cardNumber: string;
}