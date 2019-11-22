import { FETCH_BUCKET_SUCCESS } from './type';
const initialState = {
    bucket: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BUCKET_SUCCESS:
            return Object.assign({}, state, {
                bucket: action.payload
            })
        default: return initialState;
    }
}
