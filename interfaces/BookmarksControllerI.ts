import {Request, Response} from "express";


export default interface BookmarksControllerI{
    bookMarkTuit(req: Request, res: Response): void;
    unbookmarkTuit(req: Request, res: Response): void;
    findAllBookmarks(req: Request, res: Response): void;

}