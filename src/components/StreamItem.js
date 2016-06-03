import React from 'react'

import CommentBox from './CommentBox';

class StreamItem extends React.Component{
    render(){
        return(
            <li>
                <div>{this.props.activity.actor.displayname}</div>
                <div><img className="avatar-image" src={this.props.activity.actor.avatar}/></div>
                <div>{this.props.activity.object.type}</div>
                <CommentBox actor={this.props.activity.actor}/>
            </li>
        )
    }
}

export default StreamItem;