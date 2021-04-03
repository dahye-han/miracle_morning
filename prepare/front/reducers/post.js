import produce from '../util/produce';

export const initialState = {
    mainPosts: [],
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            default:
                break;
        }
    });
};

export default reducer;