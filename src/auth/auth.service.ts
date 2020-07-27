import { Injectable } from '@nestjs/common';
import { AppUsersService } from 'src/app-users/services/app-users.service';
import * as bcrypt from "bcrypt";
import { AppUser } from 'src/app-users/domain/app-user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: AppUsersService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return user.username;
            }
        }
        return null;
    }

    async login(appUser: AppUser) {
        const payload = { username: appUser.username, sub: appUser.id };
        return { access_token: this.jwtService.sign(payload) };
    }
}
