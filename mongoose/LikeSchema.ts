/**
 * @file Implements mongoose schema for likes
 */
import mongoose, {Schema} from "mongoose";
import Like from "../models/Like";

/**
 * @typedef Follows which is a representation of follows
 * @property {ObjectId} tid of Tuit of liked tuit
 * @property {ObjectId} uid of User ID who likes tuit
 */
const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;