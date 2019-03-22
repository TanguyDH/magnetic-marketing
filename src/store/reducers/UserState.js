

const initialUserState = {
    currentUser: null,
    isLoading: true
  };
  
  
  const reducerUserState = (state = initialUserState, action) => {
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            currentUser: action.user,
            isLoading: false
          };

          case "CLEAR_USER":
          return {
            ...state,
            currentUser: null,
            isLoading: false
          };
  
        default:
          return state;
      }
  }
  
  
  export default reducerUserState;