import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppUsersModule } from 'src/app-users/app-users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local-strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt-strategy/jwt.strategy';

@Module({
  imports: [
    AppUsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' },
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
