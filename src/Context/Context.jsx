import React, { Component, createContext } from "react";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
export const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = {
      totalOrder: 0,
    };

    dispatch = (action) => {
      switch (action.type) {
        case "ADD_ORDER":
          return this.setState({
            totalOrder: this.state.totalOrder + 1,
          });

        case "MINUS_ORDER":
          if (this.state.totalOrder > 0) {
            return this.setState({
              totalOrder: this.state.totalOrder - 1,
            });
          }
          break;
        default:
          return this.state;
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => <Children {...value} {...this.props} />}
        </Consumer>
      );
    }
  };
};
