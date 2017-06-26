import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState,action) {
    switch(action.type) {
        case THUMB_UP_COMMENT:
            return state.votes + 1
        case THUMB_DOWN_COMMENT:
            return state.votes - 1    
        case REMOVE_COMMENT:
            return Object.assign({},state,{
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
    }
}

function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}

const app = combineReducers({
    comments,
    users
});
