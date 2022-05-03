/**
 * @file Implements mongoose schema for bookmarks
 */
import mongoose, {Schema} from "mongoose";
import Follows from "../models/Follows";

/**
 * @typedef Follows which is a representation of follows
 * @property {ObjectId} uid of User ID of following user
 * @property {ObjectId} uid of User ID of followed user
 */
const FollowsSchema = new mongoose.Schema<Follows>({
    followedBy:{type:Schema.Types.ObjectId, ref:"UserModel"},
    following:{type:Schema.Types.ObjectId, ref:"UserModel"},
},{collection:"follows"});
export default FollowsSchema;