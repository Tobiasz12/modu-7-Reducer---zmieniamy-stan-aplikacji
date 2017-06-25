const CREATE_COMMENT = 'CREATE_COMMENT';
const REMOVE_COMENT = 'REMOVE_COMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
//THUMB_UP_COMMENT/THUMB_DOWN_COMMENT
function counter(state = 0, action) {
    switch(action.type) {
        case 'THUMB_UP_COMMENT':
            return state + 1
        case 'THUMB_DOWN_COMMENT':
            return state - 1
        default:
            return state;
    }
}

const thumbsUp = (id) => {
  return {
    type: 'THUMB_UP_COMMENT',
    id
  };
};

const thumbsDown = (id) => {
  return {
    type: 'THUMB_DOWN_COMMENT',
    id
  };
};

function removeComment(id) {
    return {
        type: REMOVE_COMENT,
        id
    }
}


//create comment
function createComment(id, author, comment) {
    return {
        type: CREATE_COMMENT,
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
