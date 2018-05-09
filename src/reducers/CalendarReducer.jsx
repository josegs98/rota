export default (state={events:[]}, action)=>{
    switch (action.type){
        case 'CALENDAR_EVENT':
            console.log('CALENDAR_EVENT')
            return{
                ...state,
                events: [...state.events, action.events]
            };
        default:
            return state;
    }
}