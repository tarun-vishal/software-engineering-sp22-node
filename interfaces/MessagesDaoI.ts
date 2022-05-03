/**
 * @file Declares API for Messages related data access object methods
 */
import Message from "../models/Message";

/**
 * @interface MessagesDaoI An interface for Messages Data access objects of follows of Tuiter.
 *
 */
export default interface MessagesDaoI{

    /**
     * Inserts messages instance into the database
     * @param {Message} message Instance to be inserted into the database
     * @returns Promise To be notified when message is inserted into the database
     */
    send(message:Message):Promise<Message>;

    /**
     * Removes message from the database.
     * @param {string} mid Primary key of message to be removed
     * @returns Promise To be notified when message is removed from the database
     */
    unsend(mid:string):Promise<any>;

    /**
     * Uses MessagesModel to retrieve all messages sent from messages collection
     * @param {string} uid USer for whom all sent messages are to be retrieved
     * @returns Promise To be notified when the messages are retrieved from
     * database
     */
    findAllMessagesSent(uid:string):Promise<Message[]>;

    /**
     * Uses TuitModel to retrieve all messages received from messages collection
     * @param {string} uid User for whom all received messages are to be retrieved
     * @returns Promise To be notified when the messages are retrieved from
     * database
     */
    findAllMessagesReceived(uid:string):Promise<Message[]>;

}