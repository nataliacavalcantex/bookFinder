import express from "express"
import routes from "./routes"
import * as Sentry from "@sentry/node";
import cors from 'cors'
import path from 'path'
import sentryConfig from './config/sentry'
import "./database"
import "dotenv/config"
import "express-async-errors"
import Youch from 'youch'
class App {
  constructor() {
    this.server = express();
    Sentry.init(sentryConfig);
    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')))
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
  exceptionHandler(){
    this.server.use(async (err,req,res,next)=>{
        if(process.env.NODE_ENV === 'development'){
        const erros= await new Youch(err,req).toJSON();
        return res.status(500).json(erros)
        }
    })
    return res.status(500).json({error:"Internal server error"})
  }
}
export default new App().server;
