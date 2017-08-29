class MathsOperation{
	constructor(operand1, operand2, operator){
		this.operand1 = parseFloat(operand1);
		this.operand2 = parseFloat(operand2);
		this.operator = operator;
	}

	calculateResult(){
		switch(this.operator){
			case '+':
				return this.operand1 + this.operand2;
			case '-':
				return this.operand1 - this.operand2;
			case '*':
				return this.operand1 * this.operand2;
			case '/':
				return this.operand1 / this.operand2;
			default:
				return alert('Something wrong happend. Please try after some time');
		}

	}
}

export default MathsOperation;