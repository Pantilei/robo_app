import React from "react";
import { shallow, render, mount } from "enzyme";
import Card from "./Card";

//Enzyme is a library used to render our components in test environment
// it("Testing Card component", () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

it("Testing Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
