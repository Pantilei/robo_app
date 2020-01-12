import {
  SEARCH,
  ROBOTS_FETCH_ERROR,
  ROBOTS_FETCH_PENDING,
  ROBOTS_FETCH_SUCCESS
} from "./constants";

export const onSearch = text => {
  return { type: SEARCH, payload: text };
};

export const fetchRobotsFromServer = () => async dispatch => {
  dispatch({ type: ROBOTS_FETCH_PENDING });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: ROBOTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROBOTS_FETCH_ERROR, payload: error });
  }
};

/* export const fetchRobotsFromServer = () => dispatch => {
  dispatch({ type: ROBOTS_FETCH_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({ type: ROBOTS_FETCH_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: ROBOTS_FETCH_ERROR, payload: error }));
}; */
