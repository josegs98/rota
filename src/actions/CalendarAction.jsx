export const calendarEvents=(events)=>{
    return{
        type:'CALENDAR_EVENT',
        
        events:events
    }
}

export const updateEvent=(updatedEvent)=>{
    return {
        type:'UPDATE_EVENT',
        updatedEvent 
    }
}