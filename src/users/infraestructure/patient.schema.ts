import * as mongoose from 'mongoose';

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
    insuranceCarriers: [
        {
            name: String,
            type: String,
            cardNumber: String
        }
    ]
});
