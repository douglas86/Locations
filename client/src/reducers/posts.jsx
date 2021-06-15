/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return state;
        case 'CREATE':
            return state;
        default:
            return state;
    }
};
