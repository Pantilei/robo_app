import React from "react";
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
//import { robots } from "./robots";

//Redux
import { connect } from "react-redux";
import { onSearch, fetchRobotsFromServer } from "../actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
    //console.log("componentDidMount");
  }

  render() {
    //console.log(this.props);
    const filteredRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.search.toLowerCase());
    });
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
            <CardsList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { search: state.searchField.search, robots: state.fetchRobots.robots };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: event => dispatch(onSearch(event.target.value)),
    fetchRobots: () => dispatch(fetchRobotsFromServer())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
