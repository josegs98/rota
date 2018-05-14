
export default (state = { workers: [], allWorkers:[] }, action) => {
    switch (action.type) {
        case 'ALL_WORKERS':
            return{
                ...state,
                allWorkers: [...state.allWorkers, action.allWorkers]
            };
            
        case 'CREATE_WORKER':
            return {
                ...state,
                workers: [...state.workers, action.worker],

            };

        case 'DELETE_ALLWORKERS':
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