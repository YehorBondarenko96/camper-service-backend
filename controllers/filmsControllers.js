import filmsService from "../services/filmsServices.js";
import decForFn from "../decorators/decForFuncs.js";
import HttpError from "../helpers/HttpError.js";

const getAllFilms = async (req, res) => {
    const messyResult = await filmsService.listFilms();
    const page = Number(req.query.page || '1');
    const pageSize = 4; 
    const startIdx = (page - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const result = messyResult.slice(startIdx, endIdx);
    
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

const postNewBooking = async (req, res) => { 
    const data = req.body;
    const newBooking = await filmsService.postBooking(data);
    if (!newBooking) {
        throw HttpError(404);
    }

    res.status(201).json(newBooking)
};

export default {
    getAllFilms: decForFn(getAllFilms),
    getOneFilm: decForFn(getOneFilm),
    postNewBooking: decForFn(postNewBooking)
}
