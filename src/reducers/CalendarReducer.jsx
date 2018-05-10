export default (state = { events: [], updatedEvents: [] }, action) => {
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
        default:
            return state;
    }
}