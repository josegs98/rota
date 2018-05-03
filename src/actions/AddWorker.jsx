export const createWorker = (worker) => {
    // Return action
    return {
      // Unique identifier
      type: 'CREATE_WORKER',
      // Payload
      worker: worker
    }
  };