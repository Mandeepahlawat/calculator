import React, { Component } from 'react';
import './App.css';
import CalculatorButton from './CalculatorButton';

class CalculatorKeyboard extends Component {
  render(){
    return (
      <div id='cal-keyboard'>
        <div>
          <CalculatorButton val='AC' handler={this.props.initialState}/>
          <CalculatorButton val='+/-' handler={this.props.changeSign}/>
          <CalculatorButton val='%' handler={this.props.calculatePercent}/>
          <CalculatorButton val='/' handler={this.props.setOperator}/>
        </div>
        <div>
          <CalculatorButton val='7' handler={this.props.setOperand}/>
          <CalculatorButton val='8' handler={this.props.setOperand}/>
          <CalculatorButton val='9' handler={this.props.setOperand}/>
          <CalculatorButton val='*' handler={this.props.setOperator}/>
        </div>
        <div>
          <CalculatorButton val='4' handler={this.props.setOperand}/>
          <CalculatorButton val='5' handler={this.props.setOperand}/>
          <CalculatorButton val='6' handler={this.props.setOperand}/>
          <CalculatorButton val='-' handler={this.props.setOperator}/>
        </div>
        <div>
          <CalculatorButton val='1' handler={this.props.setOperand}/>
          <CalculatorButton val='2' handler={this.props.setOperand}/>
          <CalculatorButton val='3' handler={this.props.setOperand}/>
          <CalculatorButton val='+' handler={this.props.setOperator}/>
        </div>
        <div>
          <CalculatorButton val='0' handler={this.props.setOperand}/>
          <CalculatorButton val='.' handler={this.props.changeToDecimal}/>
          <CalculatorButton val='=' handler={this.props.showResult}/>
        </div>
      </div>
    )
  }
}

export default CalculatorKeyboard;
