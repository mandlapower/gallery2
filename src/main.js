import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import {watchForLoadImages, watchForGetActivities} from './saga';

const store = createStore(reducer, compose(applyMiddleware(createSagaMiddleware(watchForLoadImages, watchForGetActivities)), window.devToolsExtension ? window.devToolsExtension() : f => f));

import Gallery from './components/Gallery'
import App from './components/App'
import Footer from './components/Footer'
import ActivityStreamContainer from './components/ActivityStreamContainer'

var message = "I am a Gallery Component";

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App>
                <Gallery message={message}/>
                <ActivityStreamContainer/>
                <Footer/>
            </App>
        </Provider>
    </div>,
    document.getElementById('root')
);