import express, {Request, Response} from 'express';
import mongoose from "mongoose";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import UserDao from "./daos/UserDao";
import TuitDao from "./daos/TuitDao";

const app = express();

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const url = `mongodb+srv://${userName}:${password}@cluster0.ubosn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url);


app.use(express.json());
const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());
const PORT = 4000;
app.listen(process.env.PORT || PORT);