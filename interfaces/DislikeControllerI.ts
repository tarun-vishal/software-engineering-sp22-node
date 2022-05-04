import {Request, Response} from "express";

/**
 * @file Declares API for Dislikes related controller methods
 */
export default interface DislikeControllerI {
    userDislikesTuit (req: Request, res: Response): void;
    userUndislikesTuit (req: Request, res: Response): void;
    findAllUsersThatDislikedTuit (req: Request, res: Response): void;
    findAllTuitsDislikedByUser (req: Request, res: Response): void;

};
