import { Module } from '@nestjs/common';
import { ProfessionalsController } from './controllers/professionals.controller';
import { ProfessionalsService } from './services/professionals.service';
import { PatientController } from './controllers/patients.controller';
import { PatientsService } from './services/patients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { professionalSchema } from './infraestructure/professional.schema';
import { patientSchema } from './infraestructure/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Professionals", schema: professionalSchema },
      { name: "Patients", schema: patientSchema },
    ])],
  controllers: [ProfessionalsController, PatientController],
  providers: [ProfessionalsService, PatientsService]
})
export class UsersModule { }
