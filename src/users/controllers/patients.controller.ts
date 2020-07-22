import { Controller, Get, Post, Put, Delete, Body, Param, Logger, HttpException, HttpStatus, Query } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientsService } from '../services/patients.service';
import { PatientDTO } from '../DTO/patient.dto';

@Controller("patients")
export class PatientController {

    constructor(private patientService: PatientsService) { }

    @Get()
    findAll(@Query() query): Patient[] {
        console.log("Getting Patients...")
        console.log(query);
        return this.patientService.getPatients(query);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        Logger.log("Getting patient with id: " + id);
        var obj = this.patientService.getPatientById(id);
        if(!obj){
            throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Post()
    create(@Body() patient: PatientDTO): Patient {
        return this.patientService.addPatient(patient);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() patientDto: PatientDTO): Patient {
        Logger.log("On Put");
        var obj = this.patientService.updatePatient(patientDto);
        if (!obj) {
            throw new HttpException('Item Not Found', HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        if(!this.patientService.remove(id)){
            throw new HttpException("item Not Found", HttpStatus.NOT_FOUND);
        }
        else{
            return {};
        }
    }
}
