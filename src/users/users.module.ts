import { Module } from '@nestjs/common';
import { ProfessionalsController } from './controllers/professionals.controller';
import { ProfessionalsService } from './services/professionals.service';
import { PatientController } from './controllers/patients.controller';

@Module({
  controllers: [ProfessionalsController, PatientController],
  providers: [ProfessionalsService]
})
export class UsersModule {}
