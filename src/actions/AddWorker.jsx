export const createWorker = (worker) => {
    // Return action
    return {
      // Unique identifier
      type: 'WORKER',
      // Payload
      worker: worker
    }
  };