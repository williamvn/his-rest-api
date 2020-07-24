import { InsuranceType } from "../domain/insurance-carrier.interface";

export class InsuranceCarrierDTO {
    name: string;
    type: InsuranceType;
    cardNumber: string;
}