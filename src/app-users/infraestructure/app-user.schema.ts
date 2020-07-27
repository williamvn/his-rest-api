import * as mongoose from 'mongoose';

export const appUserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    password: String
});