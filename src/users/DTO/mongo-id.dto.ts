import { IsMongoId } from "class-validator";

export class MongoIdDTO{
    @IsMongoId()
    id:string;
}