
export default (state = { workers: [] }, action) => {
    switch (action.type) {
        case 'CREATE_WORKER':
            console.log('Has entrado en create worker');
            console.log(JSON.stringify(state));
            return {
                ...state,
                workers: [...state.workers, action.worker],

            };

        case 'DELETE_WORKER':
            const workerDni=action.dni;
            return{
                ...state,
                workers:state.workers.filter(worker=>worker.dni!==workerDni)
            } 
            
        default:
            return state;
    }
};