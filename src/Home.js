import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHelloWorld } from "./actions";

class Home extends Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }
  render() {
    return <h1>{this.props.helloWorld}</h1>;
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });
const mapDispatchToProps = disptach =>
  bindActionCreators({ requestHelloWorld }, disptach);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
