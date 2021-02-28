const INITIAL_STATE = {
    img: 'https://www.colorcombos.com/images/colors/663399.png',
    title: 'Nothing to play',
    preview: null,
    isPlaying: true
}


const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_SONGS_DETAILS':
            return {
                ...state,
                img: action.payload.img,
                title: action.payload.title,
                preview: action.payload.preview
            }
        default:
            return state;
    }
    
}

export default playerReducer