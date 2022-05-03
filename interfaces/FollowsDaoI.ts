/**
 * @file Follows DAO Interface for RESTful Web service API follows resource
 */
import Follows from "../models/Follows";
/**
 * @interface FollowsDaoI An interface for data access objects of follows of Tuiter.
 *
 */
export default interface FollowsDaoI {

    /**
     * Inserts follow instance into the database
     * @param {string} uid_cur User which will follow
     * @param {string} uid User who will be followed
     * @returns Promise To be notified when message is inserted into the database
     */
    follow(uid_cur:String, uid:string):Promise<any>;

    /**
     * Removes follow instance from the database
     * @param {string} uid_cur User which will unfollow
     * @param {string} uid User who will be unfollowed
     * @returns Promise To be notified when message is deleted from the database
     */
    unfollow(uid_cur:String, uid:string):Promise<Follows>;

    /**
     * Uses FollowsModel to retrieve all follows of the user.
     * @param {string} uid User for which following list is to be retrieved
     * @returns Promise To be notified when the follows are retrieved from
     * database
     */
    findAllFollowers (uid:string): Promise<Follows[]>;

    /**
     * Uses FollowsModel to retrieve all following of the user.
     * @param {string} uid User for which following list is to be retrieved
     * @returns Promise To be notified when the following are retrieved from
     * database
     */
    findAllFollowing(uid:string): Promise<Follows[]>;

}