import 'reflect-metadata';
import express from "express";
import userRouter from './routes/userRoutes';
import sequelize from './utils/sequelizeDbConnection';
import { httpExceptionHandler } from './middleware/httpErrorHandler';




const app = express();


app.use(express.urlencoded({ extended: false}));
app.use(express.json());



app.use(userRouter);
app.use(httpExceptionHandler);



app.listen(5555, async () => {  
    await sequelize.sync();
    console.log('App is working');
})
