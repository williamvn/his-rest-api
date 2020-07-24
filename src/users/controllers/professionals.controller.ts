import { Controller, Get, Post, Body, Put, Logger, Param, HttpException, HttpStatus, Delete, Query } from '@nestjs/common';
import { ProfessionalsService } from '../services/professionals.service';
import { Professional } from '../domain/professional.interface';
import { ProfessionalDTO } from '../DTO/professional.dto';

@Controller('professionals')
export class ProfessionalsController {

    constructor(private professionalService: ProfessionalsService) { }

    @Get()
    findAll(@Query() query): Promise<Professional[]> {
        Logger.log("Get Professionals");
        return this.professionalService.getProfessionals(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Professional> {
        Logger.log("Get professional with id: " + id);
        return this.professionalService.getProfessionalById(id);
    }

    @Post()
    create(@Body() professional: ProfessionalDTO): Promise<Professional> {
        Logger.log("Create New Professional");
        return this.professionalService.addProfessional(professional);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() professionalDto: ProfessionalDTO): Promise<Professional> {
        Logger.log("Update Professional with Id: " + id);
        return this.professionalService.updateProfessional(id, professionalDto);

    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Professional> {
        Logger.log("Delete Professional with Id: " + id);
        return this.professionalService.remove(id);
    }

}
