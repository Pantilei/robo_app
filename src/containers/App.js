import React from "react";

//Redux
import { connect } from "react-redux";
import { onSearch, fetchRobotsFromServer } from "../actions";

import "./App.css";
import MainPage from "../components/MainPage";

class App extends React.Component {
  render() {
    return <MainPage {...this.props} />;
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
