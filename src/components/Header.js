import React from "react";
import Counter from "./Counter";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (this.state.counter !== prevState.counter) {
      return true;
    }
    return false;
  }

  changeCounter = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  };

  render() {
    console.log("Header");
    return (
      <>
        <h1 className="f1">Welcome To Robo App</h1>
        <Counter count={this.state.counter} countFunc={this.changeCounter} />
      </>
    );
  }
}

export default Header;
