import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        text: { type: String },
        tag: { type: String, required: true },
        author: { type: String, required: true },
        cite: { type: String},
        imgUrl: { type: String, default: '' },

    },
    { timestamps: true },
)
export default mongoose.model('Post', PostSchema)
