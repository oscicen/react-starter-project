import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

class Counter extends React.Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <p>You clicked <span className="badge badge-secondary">{this.props.count}</span> times.</p> 
        <button type="button" className="btn btn-primary" onClick={this.handleIncrement}>Increment me</button>
        <span className="mr-1" ></span>
        <button type="button" className="btn btn-primary" onClick={this.handleDecrement}>Decrement me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ count: state.counter.count });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);