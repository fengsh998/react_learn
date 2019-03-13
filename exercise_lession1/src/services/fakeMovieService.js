import * as genresAPI from "./fakeGenreService";

const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "2012",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471900",
            name: "灾难"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "海啸",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471900",
            name: "灾难"
        },
        numberInStock: 2,
        dailyRentalRate: 5.5,
        publishData: "2016-01-03T19:08:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "最终幻想",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471901",
            name: "科幻"
        },
        numberInStock: 8,
        dailyRentalRate: 8.5,
        publishData: "2014-01-03T19:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "特工老爹",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471902",
            name: "动作"
        },
        numberInStock: 1,
        dailyRentalRate: 6.5,
        publishData: "2012-04-03T05:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "外星人",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471901",
            name: "科幻"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2010-09-13T10:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471820",
        title: "喜剧之王",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471903",
            name: "喜剧"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2013-05-03T12:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "第三滴血",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471902",
            name: "动作"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2014-01-03T19:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "16区",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471902",
            name: "动作"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2018-01-03T19:14:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471823",
        title: "病毒",
        genre: {
            _id: "5b21ca3eeb7f6fbccd471900",
            name: "灾难"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishData: "2019-01-03T19:14:28.809Z"
    }
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m.id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m.id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g.id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
    if (!movieInDb._id) {

    }
    return movieInDb;
}