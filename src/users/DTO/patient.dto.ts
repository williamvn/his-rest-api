import { InsuranceCarrierDTO } from './insurance-carrier.dto';
import { AddressDTO } from "./address.dto";
import { Gender } from '../domain/user.interface';

export interface PatientDTO {
    name: string;
    lastName: string;
    secondLastName: string;
    gender: Gender;
    birthDay: Date;
    documentationId: string;
    address: AddressDTO;
    NHC: string;
    insuranceCarriers: InsuranceCarrierDTO[];
}

