import * as express from "express";
import {Request, Response} from "express";
import { exempleRouter } from "../router/route.exemple";
import * as cors from "cors";
const app: express.Application = express();


app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => { res.send('Need to add /api')})
app.get('/ms', (req: Request, res: Response) => { res.send('Need to add /auth')})
app.get('/ms/auth', (req: Request, res: Response) => { res.send('Welcome at gladiatorBack API')})

app.use('/ms/auth', exempleRouter);


export default app;