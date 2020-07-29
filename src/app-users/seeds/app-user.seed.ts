import { Command, Positional } from 'nestjs-command';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppUser } from '../domain/app-user.interface';
import * as bcrypt from "bcrypt";


@Injectable()
export class AppUserSeed {
    constructor(@InjectModel("AppUsers") private appUserModel: Model<AppUser>) { }

    @Command({ command: 'create:admin-user', describe: 'register the user admind', autoExit: true })
    async create() {
        Logger.log("Database Seed Process Started");
        const appUser = {username: "Admin", password: "password"};
        appUser.password = await bcrypt.hash(appUser.password, 10);
        const newAppUser = new this.appUserModel(appUser);
        await newAppUser.save();
        Logger.log("Database Seed Process Finsished");
    }
}