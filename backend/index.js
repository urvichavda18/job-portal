import express from "express";
import cookieParser  from"cookie-parser";
import cors from"cors";
import dotenv  from'dotenv';
import connectDB  from"./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js"
dotenv.config({});
const app = express()

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http//localhost:5173',
    Credential: true
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);




app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port${PORT}`);
})
