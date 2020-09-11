import { Router } from "express";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/register", UserController.store);

export default routes;
