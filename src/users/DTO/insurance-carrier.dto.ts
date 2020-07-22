export enum InsuranceType {
    Health = "Salud",
    Family = "Familiar",
    Dental = "Dental"
}

export class InsuranceCarrierDTO {
    name: string;
    type: InsuranceType;
    cardNumber: string;
}