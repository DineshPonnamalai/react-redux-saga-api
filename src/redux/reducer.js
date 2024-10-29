
const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_FETCH_REQUESTED':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'USER_FETCH_SUCCEEDED':
        return {
          ...state,
          loading: false,
          user: action.user,
        };
      case 'USER_FETCH_FAILED':
        return {
          ...state,
          loading: false,
          error: action.message,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  