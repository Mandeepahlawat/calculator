import React, { Component } from 'react';
import './App.css';

class CalculatorButton extends Component {
  render(){
    return (
      <div className='btn btn-default col-xs-3' onClick={this.props.handler}>
        {this.props.val}
      </div>
    )
  }
}

export default CalculatorButton;
