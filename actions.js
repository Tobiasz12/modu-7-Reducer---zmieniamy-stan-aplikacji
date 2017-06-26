export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMENT = 'REMOVE_COMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
//THUMB_UP_COMMENT/THUMB_DOWN_COMMENT

function thumbsUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbsDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

//create comment
function addComment(id, author, comment) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4()
        author,
        comment
    }
}
//removeComment
function removeComment(id) {
    return {
        type: REMOVE_COMENT,
        id
    }
}
//editComment
function editComment(id,text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}
