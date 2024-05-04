import { Schema, model } from "mongoose";
import { handelSaveError, setUpdateSettings } from "./hooks.js";
import { emailRegexp } from "../constants/user-const.js";


const bookingSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: emailRegexp
    },
    date: {
        type: String
    },
    comment: {
        type: String
    }
}, { versionKey: false, timestamps: true });

bookingSchema.post("save", handelSaveError);

bookingSchema.pre("findOneAndUpdate", setUpdateSettings);

bookingSchema.post("findOneAndUpdate", handelSaveError);

const Booking = model("booking", bookingSchema);

export default Booking;