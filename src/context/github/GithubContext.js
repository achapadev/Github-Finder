import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// only using the two below now in actions file
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// need to export Provider function
export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  // Ultimately we'll have a searchUsers that when we submit form gets those users and puts them into the state
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  // // Get search results
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();
  //   //     Dispatching the type get_users and sending the fetched data as payload
  //   //     payload property can be called anything but convention is to call it payload
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };

  // // Get single user
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     // data is single user that comes back from response
  //     const data = await response.json();
  //     //     Dispatching the type get_users and sending the fetched data as payload
  //     //     payload property can be called anything but convention is to call it payload
  //     dispatch({
  //       type: 'GET_USER',
  //       payload: data,
  //     });
  //   }
  // };

  // // Get user repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   //     Dispatching the type get_users and sending the fetched data as payload
  //   //     payload property can be called anything but convention is to call it payload
  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  //   });
  // };

  // Clear users from state
  // const clearUsers = () => {
  //   dispatch({ type: 'CLEAR_USERS' });
  // };

  //     setUsers(data);
  //     setLoading(false);

  // // Set loading
  // const setLoading = () => {
  //   dispatch({
  //     type: 'SET_LOADING',
  //   });
  // };

  return (
    <GithubContext.Provider
      //     we do users:state.users because we are getting it from line 18
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
