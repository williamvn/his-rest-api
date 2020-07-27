import { Controller, Post, Body } from '@nestjs/common';
import { AppUserDTO } from '../DTO/app-user.dto';
import { AppUsersService } from '../services/app-users.service';
import { AppUser } from '../domain/app-user.interface';

@Controller('login')
export class AppUsersController {
    constructor(private appUserService: AppUsersService){}

    @Post()
    registerUser(@Body() appUserDto: AppUserDTO):Promise<AppUser>{
        return this.appUserService.registerUser(appUserDto);
    }

}
