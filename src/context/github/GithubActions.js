import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Create instance of axios we can use
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text) => {
  //     setLoading();
  // we are going to dispatch loading from component right before we call action

  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();
  //   //     Dispatching the type get_users and sending the fetched data as payload
  //   //     payload property can be called anything but convention is to call it payload

  //   // instead of dispatching since we are doing that from component all we want to do is return the data
  //   return items;

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// // Get single user
// export const getUser = async (login) => {
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
//     return data;
//     //     dispatch({
//     //       type: 'GET_USER',
//     //       payload: data,
//     //     });
//   }
// };

// // Get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   //     Dispatching the type get_users and sending the fetched data as payload
//   //     payload property can be called anything but convention is to call it payload
//   return data;
//   //   dispatch({
//   //     type: 'GET_REPOS',
//   //     payload: data,
//   //   });
// };
