import React, { Component } from "react";
import { GlobalConsumer } from "../../../../Context/Context";
// import { Context } from "../../../Home/Home";

class Counter extends Component {
  render() {
    return (
      <div className="button-group">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
        >
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "ADD_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}

// const stateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const dispacthToProps = (dispacth) => {
//   return {
//     handlePlus: () => dispacth({ type: ActionType.PLUS }),
//     handleMinus: () => dispacth({ type: ActionType.MINUS }),
//   };
// };

// export default connect(stateToProps, dispacthToProps)(Counter);
export default GlobalConsumer(Counter);
