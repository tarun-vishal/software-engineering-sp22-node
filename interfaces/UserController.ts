/**
 * @file Controller Interface RESTful Web service API for users resource
 */
import {Request, Response} from "express";

/**
 * @interface UserController An interface for Bookmarks of Tuiter.
 *
 */
export default interface UserController {
  /**
   * Retrieves all users from the database and returns an array of users.
   * @param {Request} req Represents request from client
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the user objects
   */
  findAllUsers(req: Request, res: Response): void;

  /**
   * Retrieves the user by their primary key
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user to be retrieved
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the user that matches the user ID
   */
  findUserById(req: Request, res: Response): void;

  /**
   * Creates a new user instance
   * @param {Request} req Represents request from client, including body
   * containing the JSON object for the new user to be inserted in the
   * database
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new user that was inserted in the
   * database
   */
  createUser(req: Request, res: Response): void;

  /**
   * Removes a user instance from the database
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting a user was successful or not
   */
  deleteUser(req: Request, res: Response): void;

  /**
   * Modifies an existing user instance
   * @param {Request} req Represents request from client, including path
   * parameter uid identifying the primary key of the user to be modified
   * @param {Response} res Represents response to client, including status
   * on whether updating a user was successful or not
   */
  updateUser(req: Request, res: Response): void;

  /**
   * Removes a user instance from the database
   * @param {Request} req Represents request from client, including path
   * parameter username which are to be deleted.
   * @param {Response} res Represents response to client, including status
   * on whether deleting user based on username was successful or not
   */
  deleteUsersByUsername(req:Request, res:Response): void;
}
