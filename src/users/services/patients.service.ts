import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientDTO } from '../DTO/patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {

    private _patients: Patient[] = [];

    constructor(@InjectModel("Patients") private patientModel: Model<Patient>) { }

    async getPatients(query): Promise<Patient[]> {
        // var queryKeys = Object.keys(query);
        // if (queryKeys.length > 0) {
        //     return this._patients.filter(p => this.matchPatient(p, query, queryKeys));
        // }
        const all = await this.patientModel.find({});
        return all;
    }

    async getPatientById(id: string): Promise<Patient> {
        const patient = await this.patientModel.findById(id);
        if (!patient) {
            Logger.error("Item not Found");
            throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        }
        return patient;
    }

    async addPatient(patient: PatientDTO): Promise<Patient> {
        const newPatient = new this.patientModel(patient);
        return newPatient.save();
        // this._patients.push(patient);
        // return patient;
    }

    updatePatient(id: string, patient: PatientDTO): Patient {
        var index = this._patients.findIndex(p => p.id === id);
        // if (index !== -1) {
        //     this._patients[index] = patient;
        //     return this._patients[index];
        // }
        // Logger.warn("Wrong Id");
        return null;
    }

    remove(id: string): boolean {
        var index = this._patients.findIndex(p => p.id == id);
        var result = this._patients.splice(index, 1);
        if (result.length == 0) {
            Logger.error("Error deleting patient with id: " + id);
            return false;
        }
        return true;
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
