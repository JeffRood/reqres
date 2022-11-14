import express, { Application } from "express";
import userRoutes from "./routes/user.route";
// import sequelizeConnection from './config/sequielizeConfig'
import {connection} from './config/sequielizeConfig'

const app: Application = express();
// sequelizeConnection.finally(() => console.log('db is ready'))
connection();
// App configs
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api/users', userRoutes);

export default app;