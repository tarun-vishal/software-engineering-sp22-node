/**
 * @file Controller Interface RESTful Web service API for Messages resource
 */
import {Request, Response} from "express";

/**
 * @interface LikeControllerI An interface for Messages of Tuiter.
 */
export default interface MessagesControllerI{

    /**
     * @param {Request} req Represents request from client, including the
     * request body containing message information.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    send (req: Request, res: Response): void;

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters mid representing message to be unsent.
     * @param {Response} res Represents response to client, including status
     * on whether unfollow was successful or not
     */
    unsend (req: Request, res: Response): void;

    /**
     * Retrieves all messages that are sent by the user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which all messages sent is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the messages objects that are sent by the user
     */
    findAllMessagesSent (req: Request, res: Response): void;

    /**
     * Retrieves all messages that are received by the user
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user for which all messages received is to be retrieved
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the messages objects that are received by the user
     */
    findAllMessagesReceived(req: Request, res: Response): void;

}