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
    findOne(@Param('id') id: number) {
        Logger.log("Get professional with id: " + id);
        // var obj = this.professionalService.getProfessionalById(id);
        // if(!obj){
        //     throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        // }
        // return obj;
    }

    @Post()
    create(@Body() professional: ProfessionalDTO): Promise<Professional> {
        Logger.log("Create New Professional");
        return this.professionalService.addProfessional(professional);
        // return null;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() professionalDto: ProfessionalDTO): Professional {
        Logger.log("Update Professional with Id: " + id);
        var obj = this.professionalService.updateProfessional(professionalDto);
        if (!obj) {
            throw new HttpException('Item Not Found', HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        Logger.log("Delete Professional with Id: " + id);
        if(!this.professionalService.remove(id)){
            throw new HttpException("item Not Found", HttpStatus.NOT_FOUND);
        }
        else{
            return {};
        }
    }

}
