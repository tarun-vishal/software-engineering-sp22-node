import mongoose, {Schema} from "mongoose";
import Messages from "../models/Message";

const MessagesSchema = new mongoose.Schema<Messages>({
    message:{type: String, required: true},
    to:{type: Schema.Types.ObjectId, ref: "UserModel"},
    from:{type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn:{type: Date, default: Date.now}
},{collection:"messages"});
export default MessagesSchema;