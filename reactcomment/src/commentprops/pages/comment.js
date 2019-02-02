import React, { Component } from 'react';
import CommentAdd from './commentAdd';
import CommentList from './commentList';

import './comment.css';

class CommentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentlist:[]
        }
        this.commit = this.commit.bind(this);
    }

    commit(json){
        this.state.commentlist.unshift(json);
        // console.log(this.state.commentlist);
        this.setState({
            commentlist:this.state.commentlist
        })
    }

    render(){
        return(
            <div>
                <div className="commentHead">
                    <span>
                        react props 传值及回调demo
                    </span> 
                </div>
                <div className = "commentContainer">
                    <CommentAdd commit={this.commit}/>
                    <CommentList list={this.state.commentlist}/>
                </div>
            </div>

        )
    }
}

export default CommentPage;

