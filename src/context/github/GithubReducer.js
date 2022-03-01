const githubReducer = (state, action) => {
  switch (action.type) {
    //   fill users array with users from API & set loading to false
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // put single user in state
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
