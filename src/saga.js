import {fetchImages} from './services/flickr';
import {put, take, fork} from 'redux-saga/effects';
import {fetchAvatars, fetchActivities} from './services/activity'

export function* loadImages() {
    const images = yield fetchImages();
    yield put({type:'IMAGES_LOADED', images});
    yield put({type: 'IMAGE_SELECTED', image: images[0]})
}

export function* getActivities(url) {
    if(url){
        console.log("Get Activities: ", url);
    }else{
        console.log('No url')
    }
    const activity_payload = yield fetchActivities(url);
    yield put({type:'ACTIVITIES_FETCHED', activity_payload})
}

export function* watchForGetActivities(){
    while (true){
        const action = yield take('GET_ACTIVITIES');
        const url = action.url;
        console.log('Action:', url)
        //The issue....
        yield fork(getActivities, url);
    }
}

export function* watchForLoadImages(){
    while(true){
        yield take('LOAD_IMAGES');
        yield fork(loadImages);
    }
}