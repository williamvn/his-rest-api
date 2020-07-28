import {IsNotEmpty} from 'class-validator';

export class AppUserDTO {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}