import express from "express";
import controllersFilms from "../controllers/filmsControllers.js";
import isValidId from "../middlewares/isValidId.js";

const filmsRouter = express.Router();


filmsRouter.get("/", controllersFilms.getAllFilms);

filmsRouter.get("/:id", isValidId, controllersFilms.getOneFilm);


export default filmsRouter;
