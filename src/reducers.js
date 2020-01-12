import {
  SEARCH,
  ROBOTS_FETCH_ERROR,
  ROBOTS_FETCH_SUCCESS,
  ROBOTS_FETCH_PENDING
} from "./constants";

const initialValuesSearch = { search: "" };

export const searchFieldReducer = (state = initialValuesSearch, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

const initialValuesRobots = { robots: [], error: "", isPending: true };

export const fetchRobotsReducer = (state = initialValuesRobots, action) => {
  switch (action.type) {
    case ROBOTS_FETCH_PENDING:
      return { ...state, isPending: true };
    case ROBOTS_FETCH_SUCCESS:
      return { ...state, robots: action.payload };
    case ROBOTS_FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
