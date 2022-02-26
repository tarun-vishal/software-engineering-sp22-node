/**
 * @file Controller RESTful Web service API for bookmarks resource
 */
import {Express, Request,Response} from "express";
import BookmarksControllerI from "../interfaces/BookmarksControllerI";
import BookmarksDao from "../daos/BookmarksDao";


/**
 * @class BookmarksController Implements RESTful Web service API for bookmarks resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/bookmarks to retrieve all the tuits bookmarked by a user
 *     </li>
 *     <li>POST /users/:uid/bookmarks/:tid to record that a user bookmarks a tuit
 *     </li>
 *     <li>DELETE /users/:uid/unbookmarks/:tid to record that a user
 *     no longer bookmarks a tuit</li>
 * </ul>
 * @property {BookmarksController} BookmarksController Singleton DAO implementing bookmarks CRUD operations
 * @property {bookmarkController} bookmarkController Singleton controller implementing
 * RESTful Web service API
 */
export default class BookmarksController implements BookmarksControllerI{
    private static bookmarksDao:BookmarksDao=BookmarksDao.getInstance();
    private static bookmarksController:BookmarksController|null=null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return BookmarksController
     */
    public static getInstance = (app: Express): BookmarksController => {
        if(BookmarksController.bookmarksController === null) {
            BookmarksController.bookmarksController = new BookmarksController();
            app.get("/users/:uid/bookmarks", BookmarksController.bookmarksController.findAllBookmarks);
            app.post("/users/:uid/bookmarks/:tid", BookmarksController.bookmarksController.bookMarkTuit);
            app.delete("/users/:uid/unbookmarks/:tid", BookmarksController.bookmarksController.unbookmarkTuit);
        }
        return BookmarksController.bookmarksController;
    }

    private constructor() {}

    /**
     * Retrieves all tuits bookmarked by a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user bookmarked the tuits
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects that were bookmarked
     */
    findAllBookmarks = (req: Request, res: Response)=>
        BookmarksController.bookmarksDao.findAllBookmarks(req.params.uid)
            .then(bookmarks=>res.json(bookmarks));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is liking the tuit
     * and the tuit being bookmarked
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new bookmarks that was inserted in the
     * database
     */
    bookMarkTuit = (req: Request, res: Response)=>
        BookmarksController.bookmarksDao.bookmarkTuit(req.params.tid,req.params.uid)
            .then(bookmarks=>res.json(bookmarks));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unliking
     * the tuit and the tuit being unbookmarked
     * @param {Response} res Represents response to client, including status
     * on whether deleting the bookmark was successful or not
     */
    unbookmarkTuit = (req: Request, res: Response)=>
        BookmarksController.bookmarksDao.unbookmarkTuit(req.params.tid,req.params.uid)
            .then(status=>res.send(status));
    
}