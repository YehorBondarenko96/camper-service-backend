import Camper from "../models/Camper.js";
import Booking from "../models/Booking.js";

const listFilms = () => Camper.find();
const getOneFilm = filter => Camper.findOne(filter);
const postBooking = async (data) => { return Booking.create(data) };

export default {
    listFilms,
    getOneFilm,
    postBooking
}