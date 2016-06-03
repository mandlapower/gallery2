const defaultState = {
    images: [],
    selectedImage: "",
    activities:[],
    next_activity: ""
};
export default function images(state=defaultState, action){
    switch (action.type){
        case 'IMAGE_SELECTED':
            return {...state, selectedImage: action.image};
        case 'IMAGES_LOADED':
            return {...state, images: action.images, selectedImage:action.images[0]};
        case 'GET_ACTIVITIES':
            console.log('We will handle activities getting');
            return state;
        case 'ACTIVITIES_FETCHED':
            return {...state, activities:[...state.activities, ...action.activity_payload.list], next_activity:action.activity_payload.navigation.next}
        default:
            return state 
    }
}
