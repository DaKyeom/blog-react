import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

//action type
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

//action constructor(액션 생성자)
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

//state reset(상태 초기화)
const initialState = Map({
    title: '',
    markdown: ''
});

//reducer
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value); 
    }
}, initialState)