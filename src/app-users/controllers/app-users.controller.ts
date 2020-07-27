import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { AppUserDTO } from '../DTO/app-user.dto';
import { AppUsersService } from '../services/app-users.service';
import { AppUser } from '../domain/app-user.interface';

@Controller('login')
export class AppUsersController {
    constructor(private appUserService: AppUsersService) { }

    @Post()
    async registerUser(@Body() appUserDto: AppUserDTO): Promise<AppUser> {
        try {
            return await this.appUserService.registerUser(appUserDto);
        }
        catch (error) {
            if (error.code == 11000) {
                throw new HttpException("User Already Registered", HttpStatus.CONFLICT);
            }
            else{
                Logger.error("Internal error trying to register an user");
                throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
