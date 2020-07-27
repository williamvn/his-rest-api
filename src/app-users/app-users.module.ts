import { Module } from '@nestjs/common';
import { AppUsersController } from './controllers/app-users.controller';
import { AppUsersService } from './services/app-users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { appUserSchema } from './infraestructure/app-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "AppUsers", schema: appUserSchema }
    ])],
  controllers: [AppUsersController],
  providers: [AppUsersService],
  exports:[AppUsersService]
})
export class AppUsersModule {}
