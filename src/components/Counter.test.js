import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

it("Testing Counter component", () => {
  let count = 0;
  const countFunc = function() {
    count++;
    return count;
  };

  const wrapper = shallow(<Counter count={count} countFunc={countFunc} />);
  //wrapper.find('[id="counter"]').simulate("click");
  //console.log(wrapper.props());
  expect(wrapper.props().count).toEqual(undefined);
});
