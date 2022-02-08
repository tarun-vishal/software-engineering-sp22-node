import TuitModel from "../mongoose/TuitModel";
import Tuit from "../models/Tuit";
import TuitDaoI from "../interfaces/TuitDaoI";

export default class TuitDao implements TuitDaoI {
  async findAllTuits(): Promise<Tuit[]> {
    return await TuitModel.find();
  }

  async findTuitsByUser(uid: string): Promise<Tuit[]> {
    return await TuitModel.find({postedBy: uid});
    ;
  }

  async findTuitById(tid: string): Promise<any> {
    return await TuitModel.findById(tid);
  }

  async createTuit(tuit: Tuit): Promise<Tuit> {
    return await TuitModel.create(tuit);
  }

  async updateTuit(tid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.updateOne(
        {_id: tid},
        {$set: tuit});
  }

  async deleteTuit(tid: string): Promise<any> {
    return await TuitModel.deleteOne({_id: tid});
  }

}
