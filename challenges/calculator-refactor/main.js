(function( window, document ) {
	'use strict';

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	let $inputNumber 			= document.querySelector('[data-js="inputNumber"]');
	let $buttonNumbers 		= document.querySelectorAll('[data-js="buttonNumbers"]');
	let $buttonOperations = document.querySelectorAll('[data-js="buttonOperations"]');
	let $buttonCE 				= document.querySelector('[data-js="buttonCE"]');
	let $buttonEqual 			= document.querySelector('[data-js="buttonEqual"]');

	function initialize() {
		initEvents();
	}
	
	function initEvents() {
		Array.prototype.forEach.call( $buttonNumbers, function( btn ) {
			btn.addEventListener( 'click', handleClickNumber, false );
		});
		Array.prototype.forEach.call( $buttonOperations, function( btn ) {
			btn.addEventListener( 'click', handleClickOperation, false );
		});
		$buttonCE.addEventListener( 'click', handleClickCE, false );
		$buttonEqual.addEventListener( 'click', handleClickEqual, false );
	}

	function handleClickNumber() {
		$inputNumber.value += this.value;
	};

	function handleClickCE() {
		$inputNumber.value = this.value;
	};

	function handleClickOperation() {
		$inputNumber.value = removeLastItemIfItIsAnOperator( $inputNumber.value );
		$inputNumber.value += this.value;
	};

	function handleClickEqual() {
		$inputNumber.value 	= removeLastItemIfItIsAnOperator( $inputNumber.value );
		const allValues 		= $inputNumber.value.match( regexOperations() );
		$inputNumber.value	= allValues.reduce( calculateAllValues );
	};

	function regexOperations() {
		return new RegExp( `\\d+[${getOperations().join('')}]?`, 'g');
	}

	function calculateAllValues( acum, actual ) {
		const firstValue 		= acum.slice( 0, -1 );
		const operator 			= acum.split('').pop();
		const lastValue 		= removeLastItemIfItIsAnOperator( actual );
		const lastOperator 	= getLastOperator( actual );
		return doOperator( operator, firstValue, lastValue ) + lastOperator;
	}
	
	function getLastOperator( value ) {
		return isLastItemAnOperation( value ) ? value.split('').pop() : '';
	}

	function doOperator( operator, firstValue, lastValue ) {
		switch( operator ) {
			case '+':
				return +firstValue + +lastValue;
			case '-':
				return firstValue - lastValue;
			case 'x':
				return firstValue * lastValue;
			case '/':
				return firstValue / lastValue;
		}
	}

	function removeLastItemIfItIsAnOperator( string ) { 
		if( isLastItemAnOperation( string ) )
			return string.slice(0, -1);
		return string;
	}

	function isLastItemAnOperation( number ) {
		const operations	= getOperations();
		const lastItem 		= number.split('').pop();
		return operations.some(( operator ) => {
			return operator === lastItem;
		});
	};

	function getOperations() {
		return Array.prototype.map.call( $buttonOperations, function( btn ) {
			return btn.value;
		});
	}
		
	initialize();

})( window, document );