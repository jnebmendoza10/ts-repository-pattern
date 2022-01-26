import express from "express";
import { httpExceptionHandler } from "./middleware/httpExceptionHandler";
import sequelize from "./utils/sqlConnection";
import userRouter from "./routes/userRoutes";
import productRouter from "./routes/productRoutes";



const app = express();

app.use(express.json());

app.use(userRouter);
app.use(productRouter);

app.use(httpExceptionHandler);

app.listen(5555, async () => {
   
    await sequelize.sync();

    console.log('App is working');
})
