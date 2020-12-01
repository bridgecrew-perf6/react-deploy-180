import React, { Component, Fragment } from "react";
import { GlobalConsumer } from "../../../Context/Context";
// import { connect } from "react-redux";

class LifeCycleComp extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleChange = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <p className="heading-p">Halaman LifeCycleComp</p>
        <hr />
        <button className="btn" onClick={this.handleChange}>
          Component Button {this.state.count}
        </button>

        <p className="heading-p">TotalOrder: {this.props.state.totalOrder} </p>
      </Fragment>
    );
  }
}

// const stateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(stateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
