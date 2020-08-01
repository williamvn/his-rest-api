import { IsInt, Min, Max, IsOptional, MinLength, MaxLength, IsNumberString } from "class-validator";

export class AddressDTO {
    street: string;
    no: number;
    door: string;

    @IsNumberString()
    @MinLength(5, {
        message: "ZipCode must contain 5 numbers"
    })
    @MaxLength(5, {
        message: "ZipCode must contain 5 numbers"
    })
    @IsOptional()
    zipCode: string;
    city: string;
}