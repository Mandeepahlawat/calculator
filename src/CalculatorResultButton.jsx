import React, { Component } from 'react';
import './App.css';

class CalculatorResultButton extends Component {
  render(){
    return (
      <div className='btn btn-default' onClick={this.props.showResult}>
        {this.props.val}
      </div>
    )
  }
}

export default CalculatorResultButton;
