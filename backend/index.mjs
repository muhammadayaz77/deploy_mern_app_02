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
app.use(cors({
  origin: "http://localhost:5173", // Explicitly allow frontend origin
  credentials: true, // Allow cookies & credentials
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
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