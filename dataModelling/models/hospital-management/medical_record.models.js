import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({}, {Timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)