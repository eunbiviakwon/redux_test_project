import React, { Component } from "react";
import { connect } from "react-redux";
import { changeColor } from "../store/modules/counter";
import ColorSquare from "../components/ColorSquare";

class ColorSquareContainer extends Component {
  render() {
    const { number, color, changeColor } = this.props;

    return (
      <ColorSquare number={number} selected={color} changeColor={changeColor} />
    );
  }
}

const mapStateToProps = ({ counter: { number, color } }) => ({
  number: number,
  color: color
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContainer);
