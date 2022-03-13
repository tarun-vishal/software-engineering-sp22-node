/**
 * @file Implements mongoose schema for tuits
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";

/**
 * @typedef TuitSchema which is a representation of tuits
 * @property {ObjectId} uid of User ID primary key of user
 */
const TuitSchema = new mongoose.Schema<Tuit>({
  tuit: {type: String, required: true},
  postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
  postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;