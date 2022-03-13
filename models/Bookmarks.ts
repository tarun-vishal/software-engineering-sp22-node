/**
 * @file Declares Bookmarks type data type
 */
import Tuit from "./Tuit";
import User from "./User";

/**
 * @typedef Bookmarks represents a bookmark instance created when user bookmarks a tuit
 * @property {User} Bookmarking user
 * @property {Tuit} Tuit being bookmarked
 */
export default interface Bookmarks {
    bookmarkedTuit:Tuit,
    bookmarkedBy:User
}