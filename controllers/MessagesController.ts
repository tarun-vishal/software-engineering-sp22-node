/**
 * @file Controller RESTful Web service API for Messages resource
 */
import {Express,Response,Request} from "express";
import MessagesControllerI from "../interfaces/MessagesControllerI";
import MessagesDao from "../daos/MessagesDao";

/**
 * @class MessagesController Implements RESTful Web service API for Messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /messages/:uid/send send a new message</li>
 *     <li>GET /messages/:uid/sent to retrieve all the messages sent</li>
 *     <li>GET /messages/:uid/received to retrieve all messages received by user </li>
 *     <li>DELETE //messages/:mid/delete to unsend a particular message</li>
 * </ul>
 * @property {MessagesDao} messageDao Singleton DAO implementing user CRUD operations
 * @property {MessagesController} messagesController Singleton controller implementing
 * RESTful Web service API
 */
export default class MessagesController implements MessagesControllerI{
    private static messagesDao: MessagesDao = MessagesDao.getInstance();
    private static messagesController: MessagesController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessagesController
     */
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

    /**
     * @param {Request} req Represents request from client, including the
     * request body containing message information.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    send = (req: Request, res: Response)=>
        MessagesController.messagesDao.send(req.body)
        .then(messages=>res.json(messages));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters mid representing message to be unsent.
     * @param {Response} res Represents response to client, including status
     * on whether unfollow was successful or not
     */
    unsend = (req: Request, res: Response)=>
        MessagesController.messagesDao.unsend(req.params.mid)
        .then(status=>res.send(status));

    /**
     * Retrieves all messages that are sent by the user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which all messages sent is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the messages objects that are sent by the user
     */
    findAllMessagesSent = (req: Request, res: Response)=>
        MessagesController.messagesDao.findAllMessagesSent(req.params.uid)
            .then(messages=>res.json(messages));

    /**
     * Retrieves all messages that are received by the user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which all messages received is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the messages objects that are received by the user
     */
    findAllMessagesReceived = (req: Request, res: Response)=>
        MessagesController.messagesDao.findAllMessagesReceived(req.params.uid)
            .then(messages=>res.json(messages));


}