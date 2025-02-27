import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SymptomSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  notes: String,
});

export default model("Symptom", SymptomSchema);
