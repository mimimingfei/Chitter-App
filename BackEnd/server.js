import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dbConnect from './dbConnect.js';
import { router as peep } from './routes/peep.js'
import { router as signup } from './routes/signup.js'
import { router as login } from './routes/login.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnect();

app.use('/signup', signup);
app.use('/login', login);
app.use('/peep', peep);

app.listen(process.env.PORT, () =>
	console.log(`App is listening at http://${process.env.HOST}:${process.env.PORT}`)
);
export default app;