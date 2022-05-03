/**
 * @file Controller Interface RESTful Web service API for bookmarks resource
 */
import {Request, Response} from "express";

/**
 * @interface BookmarksControllerI An interface for Bookmarks of Tuiter.
 *
 */
export default interface BookmarksControllerI{
    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is liking the tuit
     * and the tuit being bookmarked
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new bookmarks that was inserted in the
     * database
     */
    bookMarkTuit(req: Request, res: Response): void;
    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unliking
     * the tuit and the tuit being unbookmarked
     * @param {Response} res Represents response to client, including status
     * on whether deleting the bookmark was successful or not
     */
    unbookmarkTuit(req: Request, res: Response): void;

    /**
     * Retrieves all tuits bookmarked by a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user bookmarked the tuits
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects that were bookmarked
     */
    findAllBookmarks(req: Request, res: Response): void;

}