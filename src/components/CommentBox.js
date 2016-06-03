import React from 'react'


class CommentBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <img src={this.props.actor.avatar} className="comment-avatar"/>
            </div>
        )
    }
}


export default CommentBox;