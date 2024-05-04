import express from "express";
import controllersFilms from "../controllers/filmsControllers.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../decorators/validateBody.js";
import { bookingSchema } from "../schemas/filmsSchemas.js";

const filmsRouter = express.Router();


filmsRouter.get("/", controllersFilms.getAllFilms);

filmsRouter.get("/:id", isValidId, controllersFilms.getOneFilm);

filmsRouter.post('/booking', validateBody(bookingSchema), controllersFilms.postNewBooking);


export default filmsRouter;
