import React from 'react';
import {connect} from 'react-redux';
import  * as FooterActions from '../actions.js';
import {bindActionCreators} from 'redux';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p> The current image url is {this.props.selectedImage}</p>
            </footer>
        )
    }
}

function mapStateToProps(state){
    return{
        selectedImage: state.selectedImage
    }
}

export default connect(mapStateToProps)(Footer);