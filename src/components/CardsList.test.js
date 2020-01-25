import React from "react";
import { shallow } from "enzyme";
import CardsList from "./CardsList";

it("Testing CardsList component", () => {
  const mockRobots = [{ id: 1, name: "John Doe", email: "john@gmail.com" }];

  expect(shallow(<CardsList robots={mockRobots} />)).toMatchSnapshot();
});
