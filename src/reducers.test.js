import {
  SEARCH,
  ROBOTS_FETCH_ERROR,
  ROBOTS_FETCH_SUCCESS,
  ROBOTS_FETCH_PENDING
} from "./constants";
import * as reducers from "./reducers";

describe("SearchFeild reducer:", () => {
  it("Should return initial state", () => {
    expect(reducers.searchFieldReducer(undefined, {})).toEqual({ search: "" });
  });

  it("Should handle search", () => {
    const state = { search: "" };
    expect(
      reducers.searchFieldReducer(state, {
        type: SEARCH,
        payload: "mama"
      })
    ).toEqual({ search: "mama" });
  });
});

/////////////////
describe("fetchRobots reducer:", () => {
  const initialState = { robots: [], error: "", isPending: false };
  it("should return initial state", () => {
    expect(reducers.fetchRobotsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ROBOTS_FETCH_PENDING action", () => {
    expect(
      reducers.fetchRobotsReducer(initialState, {
        type: ROBOTS_FETCH_PENDING
      })
    ).toEqual({ robots: [], error: "", isPending: true });
  });

  it("should handle ROBOTS_FETCH_SUCCESS action", () => {
    expect(
      reducers.fetchRobotsReducer(initialState, {
        type: ROBOTS_FETCH_SUCCESS,
        payload: [
          {
            id: 5,
            name: "test",
            email: "test@gmail.com"
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: 5,
          name: "test",
          email: "test@gmail.com"
        }
      ],
      error: "",
      isPending: false
    });
  });

  it("should handle ROBOTS_FETCH_ERROR action", () => {
    expect(
      reducers.fetchRobotsReducer(initialState, {
        type: ROBOTS_FETCH_ERROR,
        payload: "Noooo, this is error"
      })
    ).toEqual({
      robots: [],
      error: "Noooo, this is error",
      isPending: false
    });
  });
});
