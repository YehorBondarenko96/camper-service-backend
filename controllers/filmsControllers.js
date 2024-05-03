import filmsService from "../services/filmsServices.js";
import decForFn from "../decorators/decForFuncs.js";
import HttpError from "../helpers/HttpError.js";

const getAllFilms = async (req, res) => {
    const messyResult = await filmsService.listFilms();
    console.log('messyResult: ', messyResult);
    const page = Number(req.body.page || '1');
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

export default {
    getAllFilms: decForFn(getAllFilms),
    getOneFilm: decForFn(getOneFilm)
}
