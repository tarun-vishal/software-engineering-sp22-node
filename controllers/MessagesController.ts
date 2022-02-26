import {Express,Response,Request} from "express";
import MessagesControllerI from "../interfaces/MessagesControllerI";
import MessagesDao from "../daos/MessagesDao";

export default class MessagesController implements MessagesControllerI{
    private static messagesDao: MessagesDao = MessagesDao.getInstance();
    private static messagesController: MessagesController | null = null;

    public static getInstance = (app: Express): MessagesController => {
        if(MessagesController.messagesController === null) {
            MessagesController.messagesController = new MessagesController();
            app.get("/messages/:uid/sent", MessagesController.messagesController.findAllMessagesSent);
            app.get("/messages/:uid/received", MessagesController.messagesController.findAllMessagesReceived);
            app.post("/messages/:uid/send", MessagesController.messagesController.send);
            app.delete("/messages/:mid/delete", MessagesController.messagesController.unsend);
        }
        return MessagesController.messagesController;
    }

    private constructor() {}

    send = (req: Request, res: Response)=>
        MessagesController.messagesDao.send(req.body)
        .then(messages=>res.json(messages));

    unsend = (req: Request, res: Response)=>
        MessagesController.messagesDao.unsend(req.params.mid)
        .then(status=>res.send(status));

    findAllMessagesSent = (req: Request, res: Response)=>
        MessagesController.messagesDao.findAllMessagesSent(req.params.uid)
            .then(messages=>res.json(messages));

    findAllMessagesReceived = (req: Request, res: Response)=>
        MessagesController.messagesDao.findAllMessagesReceived(req.params.uid)
            .then(messages=>res.json(messages));


}