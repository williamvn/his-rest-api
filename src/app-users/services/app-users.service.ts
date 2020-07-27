import { Injectable } from '@nestjs/common';
import { AppUser } from '../domain/app-user.interface';
import { AppUserDTO } from '../DTO/app-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt";

@Injectable()
export class AppUsersService {

    constructor(@InjectModel("AppUsers") private appUserModel: Model<AppUser>) { }

    async registerUser(appUser: AppUserDTO): Promise<AppUser> {
        appUser.password = await bcrypt.hash(appUser.password, 10);
        const newAppUser = new this.appUserModel(appUser);
        return await newAppUser.save();
    }

    async findOne(username: string): Promise<AppUser>{
        return this.appUserModel.findOne({username: username});
    }
}
