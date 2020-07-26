import { Controller, Get, Post, Body, Put, Logger, Param, HttpException, HttpStatus, Delete, Query } from '@nestjs/common';
import { ProfessionalsService } from '../services/professionals.service';
import { Professional } from '../domain/professional.interface';
import { ProfessionalDTO } from '../DTO/professional.dto';
import { MongoIdDTO } from '../DTO/mongo-id.dto';

@Controller('professionals')
export class ProfessionalsController {

    constructor(private professionalService: ProfessionalsService) { }

    @Get()
    findAll(@Query() query): Promise<Professional[]> {
        Logger.log("Get Professionals");
        return this.professionalService.getProfessionals(query);
    }

    @Get(':id')
    async findOne(@Param() params: MongoIdDTO): Promise<Professional> {
        Logger.log("Get professional with id: " + params.id);
        var professional = await this.professionalService.getProfessionalById(params.id);
        if (!professional) {
            Logger.error("Item not Found");
            throw new HttpException("Item Not Found", HttpStatus.BAD_REQUEST);
        }
        return professional;
    }

    @Post()
    create(@Body() professional: ProfessionalDTO): Promise<Professional> {
        Logger.log("Create New Professional");
        return this.professionalService.addProfessional(professional);
    }

    @Put(':id')
    update(@Param() params: MongoIdDTO, @Body() professionalDto: ProfessionalDTO): Promise<Professional> {
        Logger.log("Update Professional with Id: " + params.id);
        return this.professionalService.updateProfessional(params.id, professionalDto);

    }

    @Delete(':id')
    remove(@Param() params: MongoIdDTO): Promise<Professional> {
        Logger.log("Delete Professional with Id: " + params.id);
        return this.professionalService.remove(params.id);
    }

}
