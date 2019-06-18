import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_start } from "../store/actions/fetchActions";

class BackGround extends Component {
  componentDidMount() {
    //this.interval = setInterval(() => this.props.getPicture(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <h1>{this.props.pictureUrl}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    pictureUrl: state.background.image,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPicture: () => dispatch(fetch_start()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackGround);
