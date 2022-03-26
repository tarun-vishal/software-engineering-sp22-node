import express, {Request, Response} from 'express';
import mongoose from "mongoose";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import BookmarksController from "./controllers/BookmarksController";
import FollowsController from "./controllers/FollowsController";
import LikeController from "./controllers/LikeController";
import MessagesController from "./controllers/MessagesController";
import UserDao from "./daos/UserDao";
import TuitDao from "./daos/TuitDao";
import cors from 'cors';


const app = express();

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const url = `mongodb+srv://${userName}:${password}@cluster0.ubosn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url);

app.use(cors())
app.use(express.json());
const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());
BookmarksController.getInstance(app);
FollowsController.getInstance(app);
LikeController.getInstance(app);
MessagesController.getInstance(app);
const PORT = 4000;
app.listen(process.env.PORT || PORT);

