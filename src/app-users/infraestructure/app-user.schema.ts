import * as mongoose from 'mongoose';

export const appUserSchema = new mongoose.Schema({
    username: String,
    password: String
});