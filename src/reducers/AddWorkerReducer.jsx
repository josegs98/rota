
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
            console.log('Has entrado en delete worker ',action.worker.id);
            const workerId=action.worker.id;
            return state.filter(worker=>worker.id!==workerId);
            
        default:
            return state;
    }
};