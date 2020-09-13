import express from "express"
import routes from "./routes"
import * as Sentry from "@sentry/node";
import cors from 'cors'
import sentryConfig from './config/sentry'
import "./database"
import "dotenv/config"
import "express-async-errors"

class App {
  constructor() {
    this.server = express(cors({
        'origin': '*',
        'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        }));
    Sentry.init(sentryConfig);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
}
export default new App().server;
