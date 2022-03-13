/**
 * @file Declares Messages data type representing messages sent by one user to another.
 */
import User from "./User";

/**
 * @typedef Message represents messages sent by one user to another.
 *  @property {string} message Message content
 * @property {User} to Receiver User ID
 *  @property {User} from Sender User ID
 * @property {sentOn} Time of message
 */
export default interface Message {
    message:string,
    to:User,
    from:User,
    sentOn:Date
}