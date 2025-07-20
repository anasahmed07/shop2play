import mongoose from "mongoose";
import { Schema } from "mongoose";


const RedeemCodeSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },

}, { timestamps: true })


const RedeemCode = mongoose.models.RedeemCode || mongoose.model('RedeemCode', RedeemCodeSchema)

export default RedeemCode




