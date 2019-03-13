import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';

export default class Movies extends Component {
    state = {
        movies: getMovies(),
        pagesize: 4
    }

    ///删除事件
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        });
    }

    render() {
        const { length: count } = this.state.movies;
        if (count === 0)
            return <p>there are no movies in the database!</p>

        return (
            <React.Fragment>
                <p>Showing {count} Movies in thd database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button type="button" className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(movie)} > 删除</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination itemsCount={count} ></Pagination>
            </React.Fragment>
        )
    }
}
