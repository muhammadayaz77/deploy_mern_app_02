import express, { application } from 'express'
import connectDB from './config/db.mjs';
import cors from 'cors'
import userRouter from './routes/userRouter.mjs'
import dotenv from 'dotenv'
import companyRouter from './routes/company.routes.mjs'
import cookieParser from 'cookie-parser';
import jobRouter from './routes/job.routes.mjs'
import applicationRouter from './routes/application.routes.mjs'
dotenv.config();
let app = express();
app.use(cookieParser());
app.use(express.json());
const allowedOrigins = [
  'https://deploy-mern-app-02-il3x-git-main-muhammadayaz77s-projects.vercel.app',
  'http://localhost:5173' // optional for dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
let PORT = process.env.PORT || 3000;
connectDB();

app.use('/user',userRouter)
app.use('/company',companyRouter)
app.use('/job',jobRouter)
app.use('/application',applicationRouter)
app.get("/ping",(req,res)=>{
  res.send("pong")
})


app.listen(PORT,()=>{
  console.log('running on http://localhost:3000');
})