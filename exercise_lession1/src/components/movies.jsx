import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';
import { paginate } from '../utils/pageinate';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

export default class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: "title", order: "asc" },
        selectdGenre:{}
    }

    componentDidMount() {
        const genres = [{ _id: "", name: "全部" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres ,selectdGenre:genres[0]});
    }

    ///删除事件
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        });
    }

    handlePageChange = (page) => {
        // console.log(page);
        this.setState({ currentPage: page });
    }

    handleItemSelected = (item) => {
        this.setState({ selectdGenre: item, currentPage: 1 });
    }

    handleSorted = (sortColumn) => {
        this.setState({ sortColumn });
    }

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectdGenre, sortColumn, movies: AllMovies } = this.state;
        
        if (count === 0)
            return <p>there are no movies in the database!</p>

        const filtered = selectdGenre && selectdGenre._id ? AllMovies.filter(m => m.genre._id === selectdGenre._id) : AllMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize)

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup items={this.state.genres}
                            onItemSelected={this.handleItemSelected}
                            selectItem={this.state.selectdGenre}
                        >
                        </ListGroup>
                    </div>
                    <div className="col-9">
                        <p>Showing {filtered.length} Movies in thd database</p>
                        <MoviesTable movies={movies}
                            sortColumn={this.state.sortColumn}
                            onDeleted={this.handleDelete}
                            onSorted={this.handleSorted}
                        >
                        </MoviesTable>
                        <Pagination itemsCount={filtered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}>
                        </Pagination>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
