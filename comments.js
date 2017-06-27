import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

 function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state.comments];
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.votes + 1 : comment;
                return comment;
            })
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.votes - 1 : comment;
                return comment;
            })
        case REMOVE_COMMENT:
            return Object.assign({},state,{
                comments: state.comments.filter(comment => {
                    if (comment.id !== action.id) {
                        return comment;
                    }
                })
            })
        case EDIT_COMMENT:
            return Object.assign({},state,{
                comments: state.comments.filter(comment => {
                if (comment.id !== action.id) {
                    return comment;
                }
                return object.assign({}, comment, {
                    text: action.text
                })
            });
        default:
    }
}

export default comments;
