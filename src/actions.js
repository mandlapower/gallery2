export const IMAGE_SELECTED = 'IMAGE_SELECTED';
const LOAD_IMAGES = 'LOAD_IMAGES';
const GET_ACTIVITIES = 'GET_ACTIVITIES';

export function loadImages() {
    return {
        type: LOAD_IMAGES
    }
}

export function getActivities(url = "") {
    console.log('next url: ', url);
    return {
        type: GET_ACTIVITIES,
        url: url
    }
}
export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image
    }
}
