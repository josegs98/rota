export default(state = { settings: [] }, action) => {
    switch(action.type) {
        case 'DEFAULT_SETTINGS':
            return{
                ...state,
                settings:[...state.settings, action.settings],
            }
        default:
            return state;
    }
}