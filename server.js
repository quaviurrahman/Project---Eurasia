import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
//const swaggerJsdoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');
import productRouter from "./routes/product.js"
import logsRouter from "./routes/logs.js"
import supplierRouter from "./routes/supplier.js"
//const postsRouter = require('./routes/posts.js');
//const dashboardRouter = require('./routes/dashboard.js')
//const userRouter = require('./routes/users.js')
import cors from "cors"


dotenv.config();
const port = process.env.PORT;
const db = process.env.db
const app = express();

// Connect to MongoDB
mongoose.connect(db).then(() => { console.log("Database Connected!")})

app.use(bodyParser.json());


// Global CORS middleware
app.use(cors());

// Routes
app.use('/products', productRouter);
app.use('/logs',logsRouter);
app.use('/suppliers',supplierRouter);
//app.use('/posts', postsRouter);
//app.use('/dashboard', dashboardRouter);
//app.use('/user', userRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});