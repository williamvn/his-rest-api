import { Controller, Post, Body, HttpException, HttpStatus, Logger, UseGuards } from '@nestjs/common';
import { AppUserDTO } from '../DTO/app-user.dto';
import { AppUsersService } from '../services/app-users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('user/register')
export class AppUsersController {
    constructor(private appUserService: AppUsersService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async registerUser(@Body() appUserDto: AppUserDTO) {
        Logger.log("Registering a new User");
        const success = await this.appUserService.registerUser(appUserDto);
        if (success) {
            return { message: "New User Registered" };
        }
        else {
            throw new HttpException("User Already Registered", HttpStatus.CONFLICT);
        }
    }
}
