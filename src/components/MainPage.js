import React from "react";
import CardsList from "./CardsList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
    //console.log("componentDidMount");
  }
  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.search.toLowerCase());
    });
  };
  render() {
    //console.log(this.props);

    //console.log("render");
    if (this.props.robots.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="tc">
        <Header color={"red"} />
        <SearchBox
          onSearchChange={this.props.onSearch}
          inputValue={this.props.search}
        />
        <Scroll>
          <ErrorBoundry>
            <CardsList robots={this.filteredRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
