import { Injectable} from '@nestjs/common';
import { Professional } from '../domain/professional.interface';
import { ProfessionalDTO } from '../DTO/professional.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfessionalsService {

    constructor(@InjectModel("Professionals") private professionalModel: Model<Professional>) { }

    async getProfessionals(query): Promise<Professional[]> {
        return this.professionalModel.find(query);
    }

    async getProfessionalById(id: string): Promise<Professional> {
        return this.professionalModel.findById(id);
    }

    async addProfessional(professional: ProfessionalDTO): Promise<Professional> {
        const newProfessional = new this.professionalModel(professional);
        return newProfessional.save();
    }

    async updateProfessional(id: string, professional: ProfessionalDTO): Promise<Professional> {
        return this.professionalModel.findByIdAndUpdate(id, professional, { new: true });
    }

    async remove(id: string): Promise<Professional> {
        return this.professionalModel.findByIdAndRemove(id);
    }
}
