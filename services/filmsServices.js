import Camper from "../models/Camper.js";

const listFilms = () => Camper.find();
const getOneFilm = filter => Camper.findOne(filter);

export default {
    listFilms,
    getOneFilm
}