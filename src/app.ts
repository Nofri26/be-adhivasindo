import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerDocs from './config/swagger';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Api using Express js');
});
swaggerDocs(app);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

export default app;
