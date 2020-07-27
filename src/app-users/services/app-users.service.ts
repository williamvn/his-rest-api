import { Injectable } from '@nestjs/common';
import { AppUser } from '../domain/app-user.interface';
import { AppUserDTO } from '../DTO/app-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppUsersService {

    constructor(@InjectModel("AppUsers") private appUserModel: Model<AppUser> ){}

    registerUser(appUser: AppUserDTO):Promise<AppUser>{
        const newAppUser = new this.appUserModel(appUser);
        return newAppUser.save();
    }
}
