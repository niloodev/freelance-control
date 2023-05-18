import { mongoose } from '../db.server'

export const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    meiName: String,
    cnpj: String,
    tel: String,
})
