import { Injectable } from '@nestjs/common';
import { AppUsersService } from 'src/app-users/services/app-users.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService: AppUsersService) { }

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
}
