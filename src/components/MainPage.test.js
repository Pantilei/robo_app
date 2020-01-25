import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    fetchRobots: jest.fn(),
    onSearch: jest.fn(),
    robots: [],
    search: ""
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe("MainComponent", () => {
  it("Renders MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Filters robots correctly", () => {
    const mockProps2 = {
      fetchRobots: jest.fn(),
      onSearch: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John Doe",
          email: "john@gmail.com"
        }
      ],
      search: "john"
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().filteredRobots()).toEqual([
      {
        id: 3,
        name: "John Doe",
        email: "john@gmail.com"
      }
    ]);
  });
});
