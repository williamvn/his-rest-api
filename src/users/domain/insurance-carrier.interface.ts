export enum InsuranceType {
    Health = "Salud",
    Family = "Familiar",
    Dental = "Dental"
}

export class InsuranceCarrier {
    name: string;
    type: InsuranceType;
    cardNumber: string;
}