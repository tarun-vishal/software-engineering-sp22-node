/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";
import LikeDaoI from "../interfaces/LikeDaoI";
import TuitModel from "../mongoose/TuitModel";


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

  /**
   * check if there's a likes document in the database for user/tuit combination
   * @param uid user id to search liked tuit on
   * @param tid tuit id to check for
   * @returns boolean representing presence of document
   */
  findUserLikesTuit =
      async (uid: string, tid: string) =>
          LikeModel.findOne(
              { tuit: tid, likedBy: uid });
  /**
   * count how many users liked a tuit
   * @param tid tuit id of the tuit
   * @returns count of users liking the tuit
   */
  countHowManyLikedTuit =
      async (tid: string) =>
          LikeModel.count({ tuit: tid });



  /**
   * update a tuit's stats
   * @param tid id ot the tuit
   * @param newStats new stats of the tuit
   * @returns
   */
  updateLikes =
      async (tid:string, newStats: object) =>
          TuitModel.updateOne(
              {_id: tid},
              {$set: {stats: newStats}});
}