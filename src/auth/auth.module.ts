import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppUsersModule } from 'src/app-users/app-users.module';

@Module({
  imports: [AppUsersModule],
  providers: [AuthService]
})
export class AuthModule {}
