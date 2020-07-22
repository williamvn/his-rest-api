import { Controller, Get, Post, Body, Put, Logger, Param, HttpException, HttpStatus, Delete, Query } from '@nestjs/common';
import { ProfessionalsService } from '../services/professionals.service';
import { Professional } from '../domain/professional.interface';
import { ProfessionalDTO } from '../DTO/professional.dto';

@Controller('professionals')
export class ProfessionalsController {

    constructor(private professionalService: ProfessionalsService) { }

    @Get()
    findAll(@Query() query): Professional[] {
        console.log(query);
        return this.professionalService.getProfessionals(query);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        var obj = this.professionalService.getProfessionalById(id);
        console.log(obj);
        if(!obj){
            throw new HttpException("Item Not Found", HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Post()
    create(@Body() professional: ProfessionalDTO): Professional {
        return this.professionalService.addProfessional(professional);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() professionalDto: ProfessionalDTO): Professional {
        Logger.log("On Put");
        var obj = this.professionalService.updateProfessional(professionalDto);
        if (!obj) {
            throw new HttpException('Item Not Found', HttpStatus.NOT_FOUND);
        }
        return obj;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        if(!this.professionalService.remove(id)){
            throw new HttpException("item Not Found", HttpStatus.NOT_FOUND);
        }
        else{
            return {};
        }
    }

}
