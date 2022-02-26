import Message from "../models/Message";

export default interface MessagesDaoI{
    send(message:Message):Promise<Message>;
    unsend(mid:string):Promise<any>;
    findAllMessagesSent(uid:string):Promise<Message[]>;
    findAllMessagesReceived(uid:string):Promise<Message[]>;

}