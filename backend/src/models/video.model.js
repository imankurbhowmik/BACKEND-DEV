import mongoose, {Schema} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const  VideoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number}
            ,
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'}
    }
    , {timestamps: true}
);  

VideoSchema.plugin(mongoosePaginate);

export const Video = mongoose.model('Video', VideoSchema);