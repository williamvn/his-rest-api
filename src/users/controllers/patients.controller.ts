import { Controller, Get, Post, Put, Delete, Body, Param, Logger, HttpException, HttpStatus, Query, Res } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientsService } from '../services/patients.service';
import { PatientDTO } from '../DTO/patient.dto';
import { MongoIdDTO } from '../DTO/mongo-id.dto';

@Controller("patients")
export class PatientController {

    constructor(private patientService: PatientsService) { }

    @Get()
    findAll(@Query() query): Promise<Patient[]> {
        Logger.log("Get Patients");
        return this.patientService.getPatients(query);
    }

    @Get(':id')
    async findOne(@Param() params: MongoIdDTO):Promise<Patient> {
        Logger.log("Get patient with id: " + params.id);
        var patient = await this.patientService.getPatientById(params.id);
        if (!patient) {
            Logger.error("Item not Found");
            throw new HttpException("Item Not Found", HttpStatus.BAD_REQUEST);
        }
        return patient;
    }

    @Post()
    create(@Body() patient: PatientDTO): Promise<Patient> {
        Logger.log("Create New Patient");
        return this.patientService.addPatient(patient);
    }

    @Put(':id')
    update(@Param() params: MongoIdDTO, @Body() patientDto: PatientDTO): Promise<Patient> {
        Logger.log("Update Patient with Id: " + params.id);
        return this.patientService.updatePatient(params.id, patientDto);
    }

    @Delete(':id')
    remove(@Param() params: MongoIdDTO):Promise<Patient> {
        Logger.log("Delete Patient with Id: " + params.id);
        return this.patientService.remove(params.id);
    }
}
