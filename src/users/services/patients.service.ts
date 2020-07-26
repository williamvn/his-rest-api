import { Injectable} from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientDTO } from '../DTO/patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {

    constructor(@InjectModel("Patients") private patientModel: Model<Patient>) { }

    async getPatients(query): Promise<Patient[]> {
       return this.patientModel.find(query);
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
}
