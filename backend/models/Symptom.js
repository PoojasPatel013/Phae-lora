import { Schema, model } from "mongoose"

const SymptomSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    severity: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    notes: String,
  },
  { timestamps: true },
)

export default model("Symptom", SymptomSchema)

