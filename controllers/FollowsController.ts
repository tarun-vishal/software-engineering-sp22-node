/**
 * @file Controller RESTful Web service API for bookmarks resource
 */
import {Express, Request, Response} from "express";
import FollowsDao from "../daos/FollowsDao";
import FollowsControllerI from "../interfaces/FollowsControllerI";

/**
 * @class FollowsController Implements RESTful Web service API for likes resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/likes to retrieve all the tuits liked by a user
 *     </li>
 *     <li>GET /tuits/:tid/likes to retrieve all users that liked a tuit
 *     </li>
 *     <li>POST /users/:uid/likes/:tid to record that a user likes a tuit
 *     </li>
 *     <li>DELETE /users/:uid/unlikes/:tid to record that a user
 *     no londer likes a tuit</li>
 * </ul>
 * @property {LikeDao} likeDao Singleton DAO implementing likes CRUD operations
 * @property {LikeController} LikeController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowsController implements FollowsControllerI {
  private static followsDao: FollowsDao = FollowsDao.getInstance();
  private static followsController: FollowsController | null = null;

  /**
   * Creates singleton controller instance
   * @param {Express} app Express instance to declare the RESTful Web service
   * API
   * @return FollowsController
   */
  public static getInstance = (app: Express): FollowsController => {
    if (FollowsController.followsController === null) {
      FollowsController.followsController = new FollowsController();
      app.get("/users/:uid/following", FollowsController.followsController.findAllFollowed);
      app.get("/users/:uid/followedby", FollowsController.followsController.findAllFollowing);
      app.post("/users/:uid_cur/follows/:uid", FollowsController.followsController.follow);
      app.delete("/users/:uid_cur/unfollows/:uid", FollowsController.followsController.unfollow);
    }
    return FollowsController.followsController;
  }

  /**
   * @param {Request} req Represents request from client, including the
   * path parameters uid and tid representing the user that is liking the tuit
   * and the tuit being bookmarked
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON containing the new bookmarks that was inserted in the
   * database
   */
  follow = (req: Request, res: Response) =>
      FollowsController.followsDao.follow(req.params.uid_cur, req.params.uid)
      .then(follows => res.json(follows));

  /**
   * @param {Request} req Represents request from client, including the
   * path parameters uid and tid representing the user that is unliking
   * the tuit and the tuit being unbookmarked
   * @param {Response} res Represents response to client, including status
   * on whether deleting the bookmark was successful or not
   */
  unfollow = (req: Request, res: Response) =>
      FollowsController.followsDao.unfollow(req.params.uid_cur, req.params.uid)
      .then(status => res.send(status));

  /**
   * Retrieves all tuits bookmarked by a user from the database
   * @param {Request} req Represents request from client, including the path
   * parameter uid representing the user bookmarked the tuits
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects that were bookmarked
   */
  findAllFollowed = (req: Request, res: Response) =>
      FollowsController.followsDao.findAllFollowers(req.params.uid)
      .then(following => res.json(following));

  /**
   * Retrieves all tuits bookmarked by a user from the database
   * @param {Request} req Represents request from client, including the path
   * parameter uid representing the user bookmarked the tuits
   * @param {Response} res Represents response to client, including the
   * body formatted as JSON arrays containing the tuit objects that were bookmarked
   */
  findAllFollowing = (req: Request, res: Response) =>
      FollowsController.followsDao.findAllFollowing(req.params.uid)
      .then(followedby => res.json(followedby));


}