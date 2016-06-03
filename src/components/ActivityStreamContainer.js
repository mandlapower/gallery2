import React from 'react'
import {connect} from 'react-redux';
import  * as ActivityActions from '../actions.js';
import {bindActionCreators} from 'redux';

import StreamItem from './StreamItem'

class ActivityStreamContainer extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const activeurl = this.props.next.trim().length > 0 ? this.props.next : 'https://aes.yookos.com/v1/jomski2009/feeds/default'
        this.props.getActivities(activeurl)
    }
    render() {
        const activeurl = this.props.next.trim().length > 0 ? this.props.next : 'https://aes.yookos.com/v1/jomski2009/feeds/default'
        console.log('Active url: ', activeurl)

        return (
            <div>
                <ul>
                    {this.props.activities.map((activity) => {
                        return (
                            <StreamItem key={activity.object.id} activity={activity}/>
                        )
                    })}
                </ul>
                <button onClick={() => this.props.getActivities(activeurl)}>Load More</button>
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

function mapActionCreatorsToProps(dispatch) {
    return bindActionCreators(ActivityActions, dispatch);
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(ActivityStreamContainer);

