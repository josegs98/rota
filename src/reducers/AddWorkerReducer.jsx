
export default (state = [], action) => {
    switch (action.type){
      case 'CREATE_WORKER':
        console.log('Has entrado en create worker');
        console.log(JSON.stringify(state));
          return [    
            ...state,
            Object.assign({}, action.worker),
            
            
          ];
      default:
            return state;
    }
  };