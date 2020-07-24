import { Controller, Get, Post, Put, Delete, Body, Param, Logger, HttpException, HttpStatus, Query, Res } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientsService } from '../services/patients.service';
import { PatientDTO } from '../DTO/patient.dto';

@Controller("patients")
export class PatientController {

    constructor(private patientService: PatientsService) { }

    @Get()
    findAll(@Query() query): Promise<Patient[]> {
        Logger.log("Get Patients");
        return this.patientService.getPatients(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string):Promise<Patient> {
        Logger.log("Get patient with id: " + id);
        var obj = this.patientService.getPatientById(id);
        if (!obj) {
            throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Post()
    create(@Body() patient: PatientDTO): Promise<Patient> {
        Logger.log("Create New Patient");
        return this.patientService.addPatient(patient);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() patientDto: PatientDTO): Promise<Patient> {
        Logger.log("Update Patient with Id: " + id);
        return this.patientService.updatePatient(id, patientDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string):Promise<Patient> {
        Logger.log("Delete Patient with Id: " + id);
        return this.patientService.remove(id);
    }
}
