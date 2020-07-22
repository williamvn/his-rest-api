import { User } from './user.interface';
import { InsuranceCarrier } from './insurance-carrier.interface';

export interface Patient extends User {
    NHC: string;
    insuranceCarriers: InsuranceCarrier[];
}

