import { Injectable, Logger } from '@nestjs/common';
import { Professional } from '../domain/professional.interface';
import { v1 as uuid } from 'uuid';
import { ProfessionalDTO } from '../DTO/professional.dto';

@Injectable()
export class ProfessionalsService {

    private _professionals: Professional[] = [];

    getProfessionals(query): Professional[] {
        var queryKeys = Object.keys(query);
        console.log(queryKeys);
        if (queryKeys.length > 0) {
            return this._professionals.filter(p => this.matchProfessional(p, query, queryKeys));
        }
        return this._professionals;
    }

    getProfessionalById(id: number) {
        return this._professionals.find(p => p.id == id);
    }

    addProfessional(professional: Professional): Professional {
        professional.id = uuid();
        this._professionals.push(professional);
        return professional;
    }

    updateProfessional(professional: ProfessionalDTO): Professional {
        var index = this._professionals.findIndex(p => p.id === professional.id);
        if (index !== -1) {
            this._professionals[index] = professional;
            return this._professionals[index];
        }
        Logger.warn("Wrong Id");
        return null;
    }

    remove(id: number): boolean {
        var index = this._professionals.findIndex(p => p.id == id);
        var result = this._professionals.splice(index, 1);
        if (result.length == 0) {
            Logger.error("Error deleting element with id: " + id);
            return false;
        }
        return true;
    }


    private matchProfessional(professional: Professional, query, queryKeys: string[]): Boolean {
        var result: boolean = true;
        queryKeys.forEach(key => {
            if (professional[key] !== query[key]) {
                result = false;
                return false;
            }
        });
        console.log(result);
        return result;
    }
}
