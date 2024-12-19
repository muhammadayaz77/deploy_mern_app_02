import express from 'express'
import connectDB from './config/db.mjs';
import cors from 'cors'
import userRouter from './routes/userRouter.mjs'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();
let app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin : 'http://localhost:5173',
  credentials : true
}));
let PORT = process.env.PORT || 3000;
connectDB();

app.use('/user',userRouter)
app.get("/ping",(req,res)=>{
  res.send("pong")
})


app.listen(PORT,()=>{
  console.log('running on http://localhost:3000');
})