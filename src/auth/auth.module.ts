import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppUsersModule } from 'src/app-users/app-users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';

@Module({
  imports: [
    AppUsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
