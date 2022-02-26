import MessagesModel from "../mongoose/MessagesModel";
import MessagesDaoI from "../interfaces/MessagesDaoI";
import Message from "../models/Message";



export default class MessagesDao implements MessagesDaoI{
    private static messagesDao:MessagesDao|null=null;
    public static getInstance=():MessagesDao=>{
        if(MessagesDao.messagesDao===null){
            MessagesDao.messagesDao = new MessagesDao();
        }
        return MessagesDao.messagesDao;
    }
    private constructor() {
    }

    findAllMessagesSent = async (uid: string): Promise<Message[]> =>
        MessagesModel.find({from:uid})
            .populate("message")
            .exec();

    findAllMessagesReceived = async (uid: string): Promise<Message[]> =>
        MessagesModel.find({to:uid})
            .populate("message")
            .exec();

    send = async (message: Message): Promise<Message> =>
        MessagesModel.create(message);

    unsend = async (mid: string): Promise<any> =>
        MessagesModel.deleteOne({_id:mid})

}