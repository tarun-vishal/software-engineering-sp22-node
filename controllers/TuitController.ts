/**
 * @file Controller RESTful Web service API for tuits resource
 */
import {Request, Response, Express} from "express";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";
import Tuit from "../models/Tuit";

/**
 * @class TuitController Implements RESTful Web service API for tuits resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /tuits to create a new tuit instance for
 *     a given user</li>
 *     <li>GET /tuits to retrieve all the tuit instances</li>
 *     <li>GET /tuits/:tid to retrieve a particular tuit instances</li>
 *     <li>GET /tuits/:tid to retrieve tuits for a given user </li>
 *     <li>PUT /tuits/:tid to modify an individual tuit instance </li>
 *     <li>DELETE /tuits/:tid to remove a particular tuit instance</li>
 * </ul>
 * @property {TuitDao} tuitDao Singleton DAO implementing tuit CRUD operations
 * @property {TuitController} tuitController Singleton controller implementing
 * RESTful Web service API
 */
export default class TuitController implements TuitControllerI {
  app: Express;
  tuitDao: TuitDao;
  constructor(app: Express, tuitDao: TuitDao) {
    this.app = app;
    this.tuitDao = tuitDao;
    app.get("/tuits", this.findAllTuits);
    app.get("/tuits/:uid/tuits", this.findTuitsByUser);
    app.get("/tuits/:tid", this.findTuitById);
    app.post("/tuits", this.createTuit);
    app.put("/tuits/:tid", this.updateTuit);
    app.delete("/tuits/:tid", this.deleteTuit);
    this.app.post("/users/:uid/tuits", this.createUserTuit);
    this.app.delete('/users/tuits/:uid', this.deleteUserTuit);
  }

  /**
   * Retrieves all tuits from the database and returns an array of tuits.
   * @param {Request} req Represents request from client
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects
   */
  findAllTuits = (req: Request, res: Response) =>
      this.tuitDao.findAllTuits()
      .then(tuits => res.json(tuits));

  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be retrieved
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the tuit that matches the user ID
   */
  findTuitById = (req: Request, res: Response) =>
      this.tuitDao.findTuitById(req.params.tid)
      .then(tuit => res.json(tuit));

  /**
   * Retrieves all tuits from the database for a particular user and returns
   * an array of tuits.
   * @param {Request} req Represents request from client
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects
   */
  findTuitsByUser = (req: Request, res: Response) =>
      this.tuitDao.findTuitsByUser(req.params.uid)
      .then((tuits: Tuit[]) => res.json(tuits));

  /**
   * @param {Request} req Represents request from client, including body
   * containing the JSON object for the new tuit to be inserted in the
   * database
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new tuit that was inserted in the
   * database
   */
  createTuit = (req: Request, res: Response) =>
          this.tuitDao.createTuit(req.body)
          .then((tuit: Tuit) => res.json(tuit));

  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting a user was successful or not
   */
  deleteTuit = (req: Request, res: Response) =>
      this.tuitDao.deleteTuit(req.params.tid)
      .then(status => res.json(status));

  /**
   * @param {Request} req Represents request from client, including path
   * parameter tid identifying the primary key of the tuit to be modified
   * @param {Response} res Represents response to client, including status
   * on whether updating a tuit was successful or not
   */
  updateTuit = (req: Request, res: Response) =>
      this.tuitDao.updateTuit(req.params.tid, req.body)
      .then(status => res.json(status));

  /**
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user for which tuit is to be created.
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new tuit that was inserted in the
   * database.
   */
  createUserTuit = (req: Request, res: Response) =>
      this.tuitDao.createUserTuit(req.params.uid, req.body)
      .then(tuit => res.json(tuit));

  /**
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user for whom tuits are to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting tuits was successful or not
   */
  deleteUserTuit = (req: Request, res: Response) =>
      this.tuitDao.deleteUserTuit(req.params.uid)
      .then(status => res.json(status));
}
