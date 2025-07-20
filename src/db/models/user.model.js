import mongoose from "mongoose";
import { Schema } from "mongoose";


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },

}, { timestamps: true })


const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User




