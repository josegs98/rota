

export const insertAllWorkers = (allWorker)=>{
  return{
      type:'ALL_WORKERS',
      allWorkers: allWorker
  }
}

export const createWorker = (worker) => {
    // Return action
    return {
      // Unique identifier
      type: 'CREATE_WORKER',
      // Payload
      worker: worker
    }
};

export const deleteWorker = (dni) => {
  // Return action
  return {
    // Unique identifier
    type: 'DELETE_WORKER',
    // Payload
    dni
  }
};

export const deleteFromAllWorkers=(dniallworker) => {
  return{
    type:'DELETE_ALLWORKERS',
    dniallworker
  }
}

