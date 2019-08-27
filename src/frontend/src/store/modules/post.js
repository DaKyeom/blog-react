import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'api/api';

//action type
const READ_POST = 'post/READ_POST';

//action constructor
export const readPost = createAction(READ_POST, api.readPost);

//state reset
const initialState = Map({
    post: Map({})
});

//reduxer
export default handleActions({
    ...pender({
        type: READ_POST,
        onSuccess: (state, action) => {
            const { data:post } =action.payload;
            return state.set('post', fromJS(post));
        }
    })
}, initialState);