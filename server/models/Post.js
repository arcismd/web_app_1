import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    number: {
        type: String,
    },
    mass: {
        type: String,
    },
    category: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    imageUrl: String,
}, {
    timestamps: true,
},
);

export default mongoose.model('Post', PostSchema);