import React from 'react'
import {connect} from 'react-redux';
import  * as ActivityActions from '../actions.js';
import {bindActionCreators} from 'redux';
import uuid from 'node-uuid'
class ActivityStreamContainer extends React.Component {
    render() {
        console.log('Next url: ', this.props.next)
        console.log(this.props.next.trim().length)
        const activeurl = this.props.next.trim().length > 0 ? this.props.next : 'https://aes.yookos.com/v1/jomski2009/feeds/default'
        console.log('Active url: ', activeurl)

        return (
            <div>
                <ul>
                    {this.props.activities.map((activity) => {
                        return (
                            <li>
                                <div>{activity.actor.displayname}</div>
                                <div><img className="avatar-image" src={activity.actor.avatar}/></div>
                                <div>{activity.object.type}</div>
                            </li>
                        )
                    })}
                </ul>
                <button onClick= {() => this.props.getActivities(activeurl)}>Load More</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities,
        next: state.next_activity
    }
}

function mapActionCreatorsToProps(dispatch){
    return bindActionCreators(ActivityActions, dispatch);
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(ActivityStreamContainer);

