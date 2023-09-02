import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name: String,
        subname: String,
        email: String,
        password: String,
        isPremium: Boolean
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;