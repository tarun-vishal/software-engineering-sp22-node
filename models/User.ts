/**
 * @file Declares Users data type.
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef Message represents messages sent by one user to another.
 * @property {string} username User Primary Key
 * @property {string} password Password of account
 * @property {string} firstName First Name
 * @property {string} lastName Last Name
 * @property {string} email Email
 * @property {string} profilePhoto Profile Picture of user
 * @property {string} headerImage Hedear Image of User
 * @property {AccountType} accountType Type of Account of user
 * @property {MaritalStatus} maritalStatus Marital status of user
 * @property {string} biography Bio specified by user
 * @property {Date} dateOfBirth Date of Birth of user
 * @property {Date} joined Date joined Tuiter
 * @property {Location} location Location of user
 */
export default interface User {
  _id?: mongoose.Schema.Types.ObjectId,
  username: string,
  password: string,
  firstName?: string,
  lastName?: string,
  email: string,
  profilePhoto?: string,
  headerImage?: string,
  biography?: string,
  dateOfBirth?: Date,
  accountType?: AccountType,
  maritalStatus?: MaritalStatus,
  location?: Location,
  salary?: number
};
