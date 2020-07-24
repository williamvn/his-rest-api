import { Injectable, Logger } from '@nestjs/common';
import { Professional } from '../domain/professional.interface';
import { v1 as uuid } from 'uuid';
import { ProfessionalDTO } from '../DTO/professional.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfessionalsService {

    private _professionals: Professional[] = [];
    
    constructor(@InjectModel("Professionals") private professionalModel: Model<Professional>){}
    

    async getProfessionals(query): Promise<Professional[]> {
        // var queryKeys = Object.keys(query);
        // if (queryKeys.length > 0) {
        //     return this._professionals.filter(p => this.matchProfessional(p, query, queryKeys));
        // }
        const all = await this.professionalModel.find({});
        return all;
    }

    getProfessionalById(id: string) {
        return this._professionals.find(p => p.id == id);
    }

    async addProfessional(professional: ProfessionalDTO): Promise<Professional> {
        // professional.id = this._professionals.length;
        const newProfessional = new this.professionalModel(professional);

        return newProfessional.save();
    }

    updateProfessional(professional: ProfessionalDTO): Professional {
        // var index = this._professionals.findIndex(p => p.id === professional.id);
        // if (index !== -1) {
        //     this._professionals[index] = professional;
        //     return this._professionals[index];
        // }
        // Logger.warn("Wrong Id");
        return null;
    }

    remove(id: string): boolean {
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
            if (professional[key] != query[key]) {
                result = false;
                return false;
            }
        });
        return result;
    }
}
