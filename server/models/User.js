import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    AdminLogin: {
        type: String,
        required: true,
    },
    AdminPassword: {
        type: String,
        required: true,
    },
    AdminLevel: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
}
)

export default mongoose.model('User', UserSchema)