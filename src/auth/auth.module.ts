import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppUsersModule } from 'src/app-users/app-users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AppUsersModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule { }
