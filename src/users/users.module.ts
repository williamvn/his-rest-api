import { Module } from '@nestjs/common';
import { ProfessionalsController } from './controllers/professionals.controller';
import { ProfessionalsService } from './services/professionals.service';
import { PatientController } from './controllers/patients.controller';
import { PatientsService } from './services/patients.service';

@Module({
  controllers: [ProfessionalsController, PatientController],
  providers: [ProfessionalsService, PatientsService]
})
export class UsersModule {}
