/**
 * @file Declares Users data type.
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

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
export default class User {
  private username: string = '';
  private password: string = '';
  private firstName: string | null = null;
  private lastName: string | null = null;
  private email: string = '';
  private profilePhoto: string | null = null;
  private headerImage: string | null = null;
  private accountType: AccountType = AccountType.Personal;
  private maritalStatus: MaritalStatus = MaritalStatus.Single;
  private biography: string | null = null;
  private dateOfBirth: Date | null = null;
  private joined: Date = new Date();
  private location: Location | null = null;
}
