/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import TuitModel from "../mongoose/TuitModel";
import Tuit from "../models/Tuit";
import TuitDaoI from "../interfaces/TuitDaoI";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of tuits
 */
export default class TuitDao implements TuitDaoI {
  private static dao: TuitDao | null = null;
  /**
   * Returns the instance of TuitDao. If instance is not present the
   * first creates the instance and the returns the same instance.
   * @returns {TuitDao} singleton of Likes DAO
   */
  public static getInstance = (): TuitDao => {
    if (TuitDao.dao === null) {
      TuitDao.dao = new TuitDao();
    }
    return TuitDao.dao;
  }
  private constructor() { }

  /**
   * Uses TuitModel to retrieve all tuits from tuits collection
   * @returns Promise To be notified when the tuits are retrieved from
   * database
   */
  async findAllTuits(): Promise<Tuit[]> {
    return await TuitModel.find();
  }

  /**
   * Uses TuitModel to retrieve tuits from tuits collection
   * @param {string} uid User's primary key
   * @returns Promise To be notified when tuits are retrieved from the database
   */
  async findTuitsByUser(uid: string): Promise<Tuit[]> {
    return await TuitModel.find({postedBy: uid});
    ;
  }

  /**
   * Uses TuitModel to retrieve single tuit from users collection
   * @param {string} tid Tuit's primary key
   * @returns Promise To be notified when tuit is retrieved from the database
   */
  async findTuitById(tid: string): Promise<any> {
    return await TuitModel.findById(tid);
  }

  /**
   * Inserts tuit instance into the database
   * @param {Tuit} tuit Instance to be inserted into the database
   * @returns Promise To be notified when tuit is inserted into the database
   */
  async createTuit(tuit: Tuit): Promise<Tuit> {
    return await TuitModel.create(tuit);
  }

  /**
   * Updates tuit with new values in database
   * @param {string} tid Primary key of tuit to be modified
   * @param {Tuit} tuit User object containing properties and their new values
   * @returns Promise To be notified when tuit is updated in the database
   */
  async updateTuit(tid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.updateOne(
        {_id: tid},
        {$set: tuit});
  }

  /**
   * Removes tuit from the database.
   * @param {string} tid Primary key of tuit to be removed
   * @returns Promise To be notified when tuit is removed from the database
   */
  async deleteTuit(tid: string): Promise<any> {
    return await TuitModel.deleteOne({_id: tid});
  }

  /**
   * Inserts tuit instance into the database
   * @param {Tuit} tuit Instance to be inserted into the database
   * @param {string} uid user ID for which tuit is to be created.
   * @returns Promise To be notified when tuit is inserted into the database
   */
  async createUserTuit(uid: string, tuit: Tuit): Promise<Tuit> {
    return await TuitModel.create(tuit);
  }

  /**
   * Updates likes count with new values in database
   * @param {string} tid Primary key of tuit stas to be modified
   * @param {any} newStats new stats object for the tuit to be updated
   * @returns Promise To be notified when tuit stats is updated in the database
   */
  updateLikes = async (tid: string, newStats: any): Promise<any> =>
      TuitModel.updateOne(
          { _id: tid },
          { $set: { stats: newStats } });

  /**
   * Removes tuits from the database based on user ID provided.
   * @param {string} uid Primary key of uid for tuits to be removed
   * @returns Promise To be notified when tuits are removed from the database
   */
  async deleteUserTuit(uid: string): Promise<any> {
    return await TuitModel.deleteMany({postedBy:uid});
  }

}
