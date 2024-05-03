import filmsService from "../services/filmsServices.js";
import decForFn from "../decorators/decForFuncs.js";
import HttpError from "../helpers/HttpError.js";

const getAllFilms = async (req, res) => {
    const result = await filmsService.listFilms();
    
    res.json(result);
};

const getOneFilm = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await filmsService.getOneFilm({_id: id, owner});
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

export default {
    getAllFilms: decForFn(getAllFilms),
    getOneFilm: decForFn(getOneFilm)
}
