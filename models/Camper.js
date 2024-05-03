import { Schema, model } from "mongoose";
import { handelSaveError, setUpdateSettings } from "./hooks.js";

const camperSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: [true, 'Set title for film'],
    },
    price: {
        type: Number
    },
    rating: {
        type: Number
    },
    location: {
        type: String
    },
    adults: {
        type: Number
    },
    children: {
        type: Number
    },
    engine: {
        type: String
    },
    transmission: {
        type: String
    },
    form: {
        type: String
    },
    length: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    tank: {
        type: String
    },
    consumption: {
        type: String
    },
    description: {
        type: String
    },
    details: {
        type: Object
    },
    gallery: {
        type: Array
    },
    reviews: {
        type: Array
    }
}, { versionKey: false, timestamps: true });

camperSchema.post("save", handelSaveError);

camperSchema.pre("findOneAndUpdate", setUpdateSettings);

camperSchema.post("findOneAndUpdate", handelSaveError);

const Camper = model("camper", camperSchema);

export default Camper;