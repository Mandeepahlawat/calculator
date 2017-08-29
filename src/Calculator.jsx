import React, { Component } from 'react';
import CalculatorKeyboard from './CalculatorKeyboard';
import CalculatorDisplay from './CalculatorDisplay';
import MathsOperation from './MathsOperation'
import './App.css';

var initialState = {operand1: null, operand2: null, operator: null, output: null}

class Calculator extends Component {
	constructor(props){
		super(props);
		this.state = initialState
		this.setOperand = this.setOperand.bind(this);
		this.setOperator = this.setOperator.bind(this);
		this.showResult = this.showResult.bind(this);
		this.setToInitialState = this.setToInitialState.bind(this);
		this.calculatePercent = this.calculatePercent.bind(this);
		this.changeOperandSign = this.changeOperandSign.bind(this);
		this.changeToDecimal = this.changeToDecimal.bind(this);
	}

	setOperand(e){
		if(this.state.output === null){
			if(this.state.operator === null){
				if(this.state.operand1 === null)
					this.setState({operand1: e.target.innerText})
				else
					this.setState({operand1: (this.state.operand1 + e.target.innerText)})
			}
			else{
				if(this.state.operand2 === null)
					this.setState({operand2: e.target.innerText})
				else
					this.setState({operand2: (this.state.operand2 + e.target.innerText)})
			}
		}
		else{
			this.setState({operand1: e.target.innerText, operand2: null, operator: null, output: null})
		}
	}

	calculatePercent(){
		if(this.state.output !== null)
			this.setState({operand1: parseFloat(this.state.output/100), operand2: null, operator: null, output: null});
		else if(this.state.operator === null)
			this.setState({operand1: parseFloat(this.state.operand1/100)});
		else
			this.setState({operand2: parseFloat(this.state.operand2/100)});
	}

	changeToDecimal(){
		if(this.state.output !== null){
			if(this.ifCorrectDecimalNumber(this.state.output) === false){return alert('Number is already in decimal')}
			this.setState({operand1: (this.state.output+'.'), operand2: null, operator: null, output: null});
		}else if(this.state.operator === null){
			if(this.ifCorrectDecimalNumber(this.state.operand1) === false){return alert('Number is already in decimal')}
			this.setState({operand1: (this.state.operand1 === null ? '.' : this.state.operand1+'.')});
		}else{
			if(this.ifCorrectDecimalNumber(this.state.operand2) === false){return alert('Number is already in decimal')};
			this.setState({operand2: (this.state.operand2 === null ? '.' : this.state.operand2+'.')});
		}
	}

	ifCorrectDecimalNumber(operand){
		if(operand % 1 !== 0)
			return false;
	}

	setToInitialState(){
		this.setState(initialState)
	}

	setOperator(e){
		if(this.state.operand1 === null)
			alert('Please select operands first');
		else if(this.state.output !== null){
			this.afterResultOperations(e.target.innerText);
		}
		else{
			this.setState({operator: e.target.innerText});
		}
	}

	afterResultOperations(operator){
		this.setState({operand1: this.state.output, operand2: null, operator: operator, output: null})
	}

	showResult(){
		if(this.state.operator === null)
			return alert('Please select operator first');
		let operation = new MathsOperation(this.state.operand1, this.state.operand2, this.state.operator)
		this.setState({output: operation.calculateResult()})
	}

	changeOperandSign(){
		if(this.state.output !== null)
			this.setState({operand1: (-this.state.output), operand2: null, operator: null, output: null});
		else if(this.state.operand2 !== null)
			this.setState({operand2: (-this.state.operand2)});
		else if(this.state.operand1 !== null)
			this.setState({operand1: (-this.state.operand1)});
		else
			alert('Please enter some operands first');
	}

  render() {
    return (
      <div>
      	<CalculatorDisplay operand1={this.state.operand1} operand2={this.state.operand2} operator={this.state.operator} output={this.state.output} />
      	<CalculatorKeyboard operand1={this.state.operand1} operand2={this.state.operand2} setOperand={this.setOperand} setOperator={this.setOperator} showResult={this.showResult} initialState={this.setToInitialState} calculatePercent={this.calculatePercent} changeSign={this.changeOperandSign} changeToDecimal={this.changeToDecimal}/>
      </div>
    );
  }
}

export default Calculator;
