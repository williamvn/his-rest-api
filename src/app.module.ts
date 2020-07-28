import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppUsersModule } from './app-users/app-users.module';
import { AuthModule } from './auth/auth.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    CommandModule,
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DBPATH}?retryWrites=true&w=majority`,
      {
        useFindAndModify: false
      }),
    AppUsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
