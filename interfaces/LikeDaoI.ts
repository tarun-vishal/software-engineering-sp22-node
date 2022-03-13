/**
 * @file Declares API for Likes related data access object methods
 */
import Like from "../models/Like";

/**
 * @interface LikeDaoI An interface for Likes access objects of follows of Tuiter.
 *
 */
export default interface LikeDaoI {

    /**
     * Uses LikeModel to retrieve all likes from messages collection
     * @param {string} tid Tuit id for which likes are to be retrieved
     * @returns Promise To be notified when the likes are retrieved from
     * database
     */
    findAllUsersThatLikedTuit (tid: string): Promise<Like[]>;

    /**
     * Uses LikeModel to retrieve all likes from messages collection
     * @param {string} uid User ID of user who likes the tuit
     * @returns Promise To be notified when the likes are retrieved from
     * database
     */
    findAllTuitsLikedByUser (uid: string): Promise<Like[]>;

    /**
     * Uses LikeModel to delete a  like for tuit.
     * @param {string} uid User ID of user who unlikes the tuit
     * @param {string} tid Tuit id of tuit to be unliked
     * @returns Promise To be notified when the likes are retrieved from
     * database
     */
    userUnlikesTuit (tid: string, uid: string): Promise<any>;

    /**
     * Uses LikeModel to create a new like for tuit.
     * @param {string} uid User ID of user who likes the tuit
     * @param {string} tid Tuit id of tuit to be liked
     * @returns Promise To be notified when the likes are retrieved from
     * database
     */
    userLikesTuit (tid: string, uid: string): Promise<Like>;
};