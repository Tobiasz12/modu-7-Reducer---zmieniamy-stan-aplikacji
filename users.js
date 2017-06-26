function users(state =[], action) {
    switch(action.type) {
        case 'NEW_USER':
            return[...state, action.name]
        default:
            return state;
    }
}
