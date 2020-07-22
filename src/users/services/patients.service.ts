import { Injectable, Logger } from '@nestjs/common';
import { Patient } from '../domain/patient.interface';
import { PatientDTO } from '../DTO/patient.dto';

@Injectable()
export class PatientsService { 

    private _patients: Patient[] = [];

    getPatients(query): Patient[] {
        var queryKeys = Object.keys(query);
        if (queryKeys.length > 0) {
            return this._patients.filter(p => this.matchPatient(p, query, queryKeys));
        }
        return this._patients;
    }

    getPatientById(id: number) {
        return this._patients.find(p => p.id == id);
    }

    addPatient(patient: Patient): Patient {
        patient.id = this._patients.length;
        this._patients.push(patient);
        return patient;
    }

    updatePatient(patient: PatientDTO): Patient {
        var index = this._patients.findIndex(p => p.id === patient.id);
        if (index !== -1) {
            this._patients[index] = patient;
            return this._patients[index];
        }
        Logger.warn("Wrong Id");
        return null;
    }

    remove(id: number): boolean {
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
