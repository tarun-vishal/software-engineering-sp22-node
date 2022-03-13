/**
 * @file Bookmarks DAO Interface for RESTful Web service API bookmarks resource
 */
import Bookmarks from "../models/Bookmarks";

/**
 * @interface BookmarksDaoI An interface for data access objects of Bookmarks of Tuiter.
 *
 */
export default interface BookmarksDaoI{

    /**
     * Uses BookmarksModel to create a new Bookmark for a user for a specific tuit.
     * @param {string} uid User id who wants to bookmark a tuit
     * @param {string} tid Tuit id of tuit to be bookmarked
     * @returns Promise To be notified when the bookmarks are added to
     * database
     */
    bookmarkTuit(tid:string, uid:string):Promise<any>;
    /**
     * Uses BookmarksModel to delete a Bookmark for tuit.
     * @param {string} uid User ID of user who unbookmark the tuit
     * @param {string} tid Tuit id of tuit to be unbookmark
     * @returns Promise To be notified when the bookmarks are retrieved from
     * database
     */
    unbookmarkTuit(tid:string, uid:string):Promise<Bookmarks>;

    /**
     * Uses BookmarksModel to retrieve all bookmarks from bookmarks collection
     * @param {string} uid User id for which bookmarks are to be retrieved
     * @returns Promise To be notified when the bookmarks are retrieved from
     * database
     */
    findAllBookmarks(uid:string):Promise<Bookmarks[]>;

}