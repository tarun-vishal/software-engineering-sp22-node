import {Request, Response} from "express";

export default interface MessagesControllerI{
    send (req: Request, res: Response): void;
    unsend (req: Request, res: Response): void;
    findAllMessagesSent (req: Request, res: Response): void;
    findAllMessagesReceived(req: Request, res: Response): void;

}