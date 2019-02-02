import React, { Component } from 'react';
import './comment.css'

class CommentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        let name = this.refs.inputname.value; 
        let content = this.refs.content.value;

        name = name.trim();
        content = content.trim();

        if (name.length === 0) {
            console.log("用户名称不能为空!");
            return;
        }

        if (content.length === 0) {
            console.log("内容不能为空!");
            return;
        }

        let {commit} = this.props;
        let json = {"name":name,"content":content};
        commit(json);
        this.refs.inputname.value = "";
        this.refs.content.value = "";
    }

    render(){
        
        return(
            <div className="commentAddContainer">
                <div className="row">
                    用户名:
                </div>
                <input ref="inputname" className="inputname" placeholder="请输入用户名"/>
                <div className="row">
                    评论内容:
                </div>
                <textarea ref="content" className="inputcomment" placeholder="请输入评论内容"/>
                <div className="buttonrow">
                    <button className="buttonstyle" onClick={this.handleAdd}>提交</button> 
                </div>
            </div>
        )
    }
}

export default CommentAdd;