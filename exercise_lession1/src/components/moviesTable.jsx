
import React, { Component } from 'react'

class MoviesTable extends Component {

    rasieSorted = path => {
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
    }

    render() {
        const { movies, onDeleted, onSorted } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => onSorted('title')} scope="col">Title</th>
                        <th onClick={() => onSorted('genre.name')} scope="col">Genre</th>
                        <th onClick={() => onSorted('numberInStock')} scope="col">Stock</th>
                        <th onClick={() => onSorted('dailyRentalRate')} scope="col">Rate</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button type="button" className="btn btn-danger btn-sm"
                                onClick={() => onDeleted(movie)} > 删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default MoviesTable;