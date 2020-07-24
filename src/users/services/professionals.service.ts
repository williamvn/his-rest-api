import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
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
        return await this.professionalModel.find({query});
    }

    async getProfessionalById(id: string):Promise<Professional> {
        var professional =  this.professionalModel.findById(id);
        if (!professional) {
            Logger.error("Item not Found");
            throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        }
        return professional;
    }

    async addProfessional(professional: ProfessionalDTO): Promise<Professional> {
        const newProfessional = new this.professionalModel(professional);
        return newProfessional.save();
    }

    async updateProfessional(id:string, professional: ProfessionalDTO): Promise<Professional> {
        return this.professionalModel.findByIdAndUpdate(id, professional, { new: true });
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
