import { InsuranceCarrierDTO } from './insurance-carrier.dto';
import { AddressDTO } from "./address.dto";

export enum Gender {
    M = "M",
    F = "F"
}

export interface PatientDTO {
    id: number;
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

