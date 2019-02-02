import React, { Component } from 'react';
import CommentItem from './commentItem';

import './comment.css'

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    render(){
        const {list} = this.props;

         let elements = list.map((item,index) => {
            return (<CommentItem data={item} key={index}/>);
        })



        return(
            <div className="commentlist">
                <div className="commenttitle">评论回复</div>

                <div className="commentItemContainer">
                    {elements.lenght > 0 ?<div>ddd</div> :<div>bbbb</div>}
                </div>
                
            </div>
        )
    }
}

export default CommentList;