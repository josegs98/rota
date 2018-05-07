
export default (state = { workers: [], allWorkers:[] }, action) => {
    switch (action.type) {
        case 'ALL_WORKERS':
            console.log('Ha entrado en allworkers');
            return{
                ...state,
                allWorkers: [...state.allWorkers, action.allWorkers]
            };
            
        case 'CREATE_WORKER':
            console.log('Has entrado en create worker');
            console.log(JSON.stringify(state));
            return {
                ...state,
                workers: [...state.workers, action.worker],

            };

        case 'DELETE_ALLWORKERS':
            console.log('Delete all workers');
            const allWorkerDni=action.dniallworker;

            return{
                ...state,
                allWorkers:state.allWorkers.filter(allWorker=>allWorker.dni!==allWorkerDni)
            }

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