import React, { Component } from 'react';
import './App.css';

class CalculatorOperatorButton extends Component {
  render(){
    return (
      <div className='btn btn-default' onClick={this.props.setOperator}>
        {this.props.val}
      </div>
    )
  }
}

export default CalculatorOperatorButton;
