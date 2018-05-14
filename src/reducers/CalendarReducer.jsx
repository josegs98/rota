export default (state = { events: [] }, action) => {
    switch (action.type) {
        case 'CALENDAR_EVENT':
            console.log('CALENDAR_EVENT')
            return {
                ...state,
                events: [...state.events, action.events]
            };

        case 'UPDATE_EVENT':
            const updatedEvent = action.updatedEvent;
            state.events.map(item => console.log('id', item.id === updatedEvent.id));
            return {
                ...state, events: state.events.map(item => {
                    if(item.id === updatedEvent.id){
                        console.log("ENTRAs")
                        return {...item, ...updatedEvent}
                    }
                    return item
                })
            }
        
        case 'DELETE_EVENT':
            console.log('DELETE EVENT')
            const id = action.id;

            return {
                ...state,
                events:state.events.filter(event=>event.id!==id)
            }
        default:
            return state;
    }
}