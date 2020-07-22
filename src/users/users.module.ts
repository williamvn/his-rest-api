import { Module } from '@nestjs/common';
import { ProfessionalsController } from './controllers/professionals.controller';
import { ProfessionalsService } from './services/professionals.service';

@Module({
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService]
})
export class UsersModule {}
