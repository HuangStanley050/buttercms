import React, { Component } from "react";
import { connect } from "react-redux";

class BackGround extends Component {
  render() {
    return <h1>{this.props.pictureUrl}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    pictureUrl: state.background.image,
  };
};

export default connect(mapStateToProps)(BackGround);
