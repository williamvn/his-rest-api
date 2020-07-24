import * as mongoose from 'mongoose';
import { InsuranceType } from '../domain/insurance-carrier.interface';

export const patientSchema = new mongoose.Schema({
    id: Number,
    name: String,
    lastName: String,
    secondLastName: String,
    gender: String,
    birthDay: Date,
    documentationId: String,
    address: {
        street: String,
        no: Number,
        door: String,
        zipCode: Number,
        city: String
    },
    NHC: String,
    insuranceCarriers: Array<InsuranceType>()
});
