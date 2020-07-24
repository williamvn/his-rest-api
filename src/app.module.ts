import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.avf8s.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,  
    {
      useFindAndModify: false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
