/**
 * @file Controller Interface RESTful Web service API for tuits resource
 */
import {Request, Response} from "express";
/**
 * @interface LikeControllerI An interface for tuits of Tuiter.
 *
 */
export default interface TuitControllerI {

  /**
   * Retrieves all tuits from the database and returns an array of tuits.
   * @param {Request} req Represents request from client
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects
   */
  findAllTuits(req: Request, res: Response): void;

  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be retrieved
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the tuit that matches the user ID
   */
  findTuitById(req: Request, res: Response): void;

  /**
   * Retrieves all tuits from the database for a particular user and returns
   * an array of tuits.
   * @param {Request} req Represents request from client
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects
   */
  findTuitsByUser(req: Request, res: Response): void;

  /**
   * @param {Request} req Represents request from client, including body
   * containing the JSON object for the new tuit to be inserted in the
   * database
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new tuit that was inserted in the
   * database
   */
  createTuit(req: Request, res: Response): void;


  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be modified
   * @param {Response} res Represents response to client, including status
   * on whether updating a tuit was successful or not
   */
  updateTuit(req: Request, res: Response): void;

  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting a user was successful or not
   */
  deleteTuit(req: Request, res: Response): void;

  /**
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user for which tuit is to be created.
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new tuit that was inserted in the
   * database.
   */
  createUserTuit(req: Request, res: Response): void;

  /**
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user for whom tuits are to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting tuits was successful or not
   */
  deleteUserTuit(req: Request, res: Response): void;
}
