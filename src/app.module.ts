import { ProfessionalsController } from './professionals/controllers/professionals.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessionalsModule } from './professionals/professionals.module';

@Module({
  imports: [ProfessionalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
