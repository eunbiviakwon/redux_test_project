import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/modules/counter";
import Counter from "../components/Counter";

class CounterContainer extends Component {
  render() {
    const { color, number, increment, decrement } = this.props;

    return (
      <Counter
        color={color}
        number={number}
        increment={increment}
        decrement={decrement}
      />
    );
  }
}

const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
