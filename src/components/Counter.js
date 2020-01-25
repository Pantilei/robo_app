import React from "react";

class Counter extends React.Component {
  shouldComponentUpdate(prevProps, preState) {
    if (this.props.count !== prevProps.count) {
      return true;
    }
    return false;
  }
  render() {
    //console.log("counter");
    return (
      <div>
        <button id="counter" onClick={() => this.props.countFunc()}>
          Click me: {this.props.count}
        </button>
      </div>
    );
  }
}

export default Counter;
