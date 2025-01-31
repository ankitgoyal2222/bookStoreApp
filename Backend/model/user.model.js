import mongoose from "mongoose";

// user ka schema bana rhe hai
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
// schema ko model mein convert krenge ya schema ka model banayenge
const User = mongoose.model("User", userSchema);
export default User;