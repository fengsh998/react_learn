
import React, { Component } from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

class MoviesTable extends Component {

    columns = [
        {path:'title',label:'名称'},
        {path:'genre.name',label:'类别'},
        {path:'numberInStock',label:'库存'},
        {path:'dailyRentalRate',label:'评分'},
        {key:'delete',content: movie => (<button type="button" className="btn btn-danger btn-sm"
        onClick={() => this.props.onDeleted(movie)} > 删除</button>)},
    ];
    
    render() {
        const { movies , onSorted, sortColumn} = this.props;
        return (
            <table className="table">
                
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSorted={onSorted}/>
                <TableBody data={movies} columns={this.columns} />
            </table>
        )
    }
}

export default MoviesTable;