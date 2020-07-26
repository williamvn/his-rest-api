import { IsInt, Min, Max, IsOptional } from "class-validator";

export class AddressDTO {
    street: string;
    no: number;
    door: string;

    @IsInt()
    @Min(10000, {
        message: "ZipCode must contain 5 numbers"
    })
    @Max(100000, {
        message: "ZipCode must contain 5 numbers"
    })
    @IsOptional()
    zipCode: number;
    city: string;
}