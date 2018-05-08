export default(state = { settings: [] }, action) => {
    switch(action.type) {
        case 'DEFAULT_SETTINGS':
        console.log('default settings', 'background: #222; color: #bada55');
            return{
                ...state,
                settings:action.settings
            }
        default:
            return state;
    }
}