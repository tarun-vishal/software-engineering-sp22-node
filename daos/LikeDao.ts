/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";
import LikeDaoI from "../interfaces/LikeDaoI";


/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

  /**
   * Uses LikeModel to retrieve all likes from messages collection
   * @param {string} tid Tuit id for which likes are to be retrieved
   * @returns Promise To be notified when the likes are retrieved from
   * database
   */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

  /**
   * Uses LikeModel to retrieve all likes from messages collection
   * @param {string} uid User ID of user who likes the tuit
   * @returns Promise To be notified when the likes are retrieved from
   * database
   */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

  /**
   * Uses LikeModel to create a new like for tuit.
   * @param {string} uid User ID of user who likes the tuit
   * @param {string} tid Tuit id of tuit to be liked
   * @returns Promise To be notified when the likes are retrieved from
   * database
   */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

  /**
   * Uses LikeModel to delete a  like for tuit.
   * @param {string} uid User ID of user who unlikes the tuit
   * @param {string} tid Tuit id of tuit to be unliked
   * @returns Promise To be notified when the likes are retrieved from
   * database
   */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}