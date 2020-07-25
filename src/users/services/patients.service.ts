import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientDTO } from '../DTO/patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {

    constructor(@InjectModel("Patients") private patientModel: Model<Patient>) { }

    async getPatients(query): Promise<Patient[]> {
        const all = await this.patientModel.find(query);
        return all;
    }

    async getPatientById(id: string): Promise<Patient> {
        return this.patientModel.findById(id);
    }

    async addPatient(patient: PatientDTO): Promise<Patient> {
        const newPatient = new this.patientModel(patient);
        return newPatient.save();
    }

    async updatePatient(id: string, patient: PatientDTO): Promise<Patient> {
        return this.patientModel.findByIdAndUpdate(id, patient, { new: true });
    }

    async remove(id: string):Promise<Patient> {
        return this.patientModel.findByIdAndRemove(id);
    }

    private matchPatient(patient: Patient, query, queryKeys: string[]): Boolean {
        var result: boolean = true;
        queryKeys.forEach(key => {
            if (patient[key] != query[key]) {
                result = false;
                return false;
            }
        });
        return result;
    }
}
