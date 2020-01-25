import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("Testing Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.length).toEqual(1);
});
