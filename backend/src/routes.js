import { Router } from "express";
import UserController from "./app/controllers/UserController";
import FileController from './app/controllers/FileController'
import SessionController from "./app/controllers/SessionController";
import multer from 'multer'
import multerConfig from './config/multer'
import auth from './app/middlewares/Auth'
const upload= multer (multerConfig)
const routes = new Router();

routes.post("/register", UserController.store);
routes.post("/login", SessionController.store);
routes.use(auth)
routes.put("/users", UserController.update);
routes.post('/files',upload.single('file'),FileController.store);
export default routes;
