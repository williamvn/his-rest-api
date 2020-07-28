import { Module } from '@nestjs/common';
import { AppUsersController } from './controllers/app-users.controller';
import { AppUsersService } from './services/app-users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { appUserSchema } from './infraestructure/app-user.schema';
import { CommandModule } from 'nestjs-command';
import { AppUserSeed } from './seeds/app-user.seed';

@Module({
  imports: [
    CommandModule,
    MongooseModule.forFeature([
      { name: "AppUsers", schema: appUserSchema }
    ])],
  controllers: [AppUsersController],
  providers: [AppUsersService, AppUserSeed],
  exports: [AppUsersService, AppUserSeed]
})
export class AppUsersModule { }
