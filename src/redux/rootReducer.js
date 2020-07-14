import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { appReducer } from './appReduser';

export const rootReduser = combineReducers({
    posts: postsReducer,
    app: appReducer,
})