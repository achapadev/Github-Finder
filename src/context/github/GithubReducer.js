const githubReducer = (state, action) => {
  switch (action.type) {
    //   fill users array with users from API & set loading to false
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
