import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// need to export Provider function
export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  // Ultimately we'll have a searchUsers that when we submit form gets those users and puts them into the state
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    //     Dispatching the type get_users and sending the fetched data as payload
    //     payload property can be called anything but convention is to call it payload
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
    //     setUsers(data);
    //     setLoading(false);
  };

  // Set loading
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  return (
    <GithubContext.Provider
      //     we do users:state.users because we are getting it from line 18
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
