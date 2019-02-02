import React, { Component } from 'react';

import './comment.css'

class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        let {data} = this.props;
        return(
            <div>
                <div className="commentItem">
                    {data.name}说:
                </div>
                <div className="commentItem">
                {data.content}
                </div>
                <hr className="commentItemLine" noshade="true"/>
            </div>
        )
    }
}

export default CommentItem;