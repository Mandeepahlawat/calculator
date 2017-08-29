import React, { Component } from 'react';
import './App.css';

class CalculatorDisplay extends Component {
  render() {
    var display_operand = null
    if(this.props.output === null){
      display_operand = (this.props.operator === null ? this.props.operand1 : (this.props.operand2 == null ? (this.props.operand1 + this.props.operator) : (this.props.operand1 + this.props.operator + this.props.operand2)));
    }
    else{
      display_operand = this.props.output
    }
    return (
      <div id="cal-display">
        {display_operand}
      </div>
    );
  }
}

export default CalculatorDisplay;
