//https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/
//https://redux.js.org/recipes/writing-tests/
import {
  SEARCH,
  ROBOTS_FETCH_ERROR,
  ROBOTS_FETCH_PENDING,
  ROBOTS_FETCH_SUCCESS
} from "./constants";

import * as actions from "./actions";
import configureMockStore from "redux-mock-store";
import thunkMidleware from "redux-thunk";
import fetchMock from "fetch-mock";

const mockStore = configureMockStore([thunkMidleware]);

describe("onSearch action", () => {
  const search = "test";
  const expectedAction = {
    type: SEARCH,
    payload: "test"
  };
  it("should create an action to search robots", () => {
    expect(actions.onSearch(search)).toEqual(expectedAction);
  });
});

describe("fetchRobotsFromServer action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should handle requesting robots API", () => {
    const store = mockStore(); //create a fake store that has thunk middleware
    store.dispatch(actions.fetchRobotsFromServer()); // we dispatch the function which thunk middleware is expecting
    const action = store.getActions();
    const expectedAction = {
      type: ROBOTS_FETCH_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should handle requesting robots API", () => {
    fetchMock.getOnce("/", {
      payload: [
        {
          id: 5,
          name: "masha",
          email: "masha@gmail.com"
        }
      ],
      headers: { "content-type": "application/json" }
    });

    const expectedAction = [
      {
        type: ROBOTS_FETCH_PENDING
      },
      {
        type: ROBOTS_FETCH_SUCCESS,
        payload: [
          {
            id: 5,
            name: "masha",
            email: "masha@gmail.com"
          }
        ]
      },
      {
        type: ROBOTS_FETCH_ERROR
      }
    ];

    const store = mockStore({ robots: [] });

    return store.dispatch(actions.fetchRobotsFromServer()).then(() => {
      const action = store.getActions();
      console.log(action);

      expect(action).toEqual(expectedAction);
    });
  });
});
