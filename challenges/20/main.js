(function( window, document ) {
	'use strict';

	/*
	1. Envolva todo o conteúdo desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Passe por parâmetro para a IIFE os objetos window e document.
	4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
	a marcação criada nele para fazer nosso desafio ;)

	O HTML NÃO PODE ser alterado!
	*/

	/*
	Anotations
	- alert --> mostra uma msg
	- prompt --> recebe uma entrada de dado
	- confirm --> confirmar alguma informação
	- document --> representa o DOM (document object model), é um objeto criado quando temos uma estrutura HTML ou XML

	- document.getElementById( 'my-id' );
		// 
			<div id='my-id'>
				<label>Nome:</label>
				<input type="text" />
			</div>
		//

	- document.getElementsByClassName( 'my-class' );
		//
			HTMLCollection(2) [div.my-class, div.my-class]
			0: div.my-class
			1: div.my-class
			length: 2
			__proto__:	HTMLCollection
		//

	- document.geElementsByTagName('input')
		//
			HTMLCollection(2) [input, input]
			0: input
			1: input
			length: 2
			__proto__: HTMLCollection
		//

	- document.geElementsByName('username')
		//
			NodeList [input]0: 
			inputlength: 1
			__proto__: NodeList

	- document.querySelector( 'input' ) --> <input type="text" name='username' /> // só retorna o primeiro elemento
	- document.querySelectorAll( 'input' ) // retorna todos os inputs encontrados 
		//
			NodeList(2) [input, input]
			0: input
			1: input
			length: 2
			__proto__: NodeList
		//

	- document.querySelectorAll( '.my-class' ) --> pela classe
	- document.querySelector( '#my-id' ) --> pela classe
	- document.querySelectorAll( '[type="email"]' ) --> pela classe

	- document.querySelector( '#username' ) --> pela classe

	-	$button.addEventListener( 'click', (event) => {
			event.preventDefault();
			console.log('click no botão');
		}, false);

		- event --> pode ser qq nome, é um objeto relacionado ao evento do button e contém 
								algumas informações relacionadas ao button, e por padrão é   recebido 
								pelas funções da api do DOM.

		- podemos prevenir o comportamento padrão de alguns elementos html com o 
			event.preventDefault(), ele previne o evento padrão
	/*
	Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
	resultado à uma variável chamada `username`. Se o usuário não digitar um
	nome, `username` deve receber "Desconhecido".
	Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
	*/
	
	let $username = prompt('Qual o seu nome?') || 'Desconhecido';
	alert( `Bem vindo ${$username}` );

	/*
	Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
	uma variável chamada `email`.
	*/
	let $email = prompt('Qual o seu e-mail?');

	/*
	- Selecione o input de "Nome", atribuindo-o à uma variável chamada
	`$inputUsername`.
	*/
	let $inputUsername = document.querySelector('[type="text"]');
	
	/*
	- Selecione o input de "Email", atribuindo-o à uma variável chamada
	`$inputEmail`.
	*/
	let $inputEmail = document.querySelector('[type="email"]');
	
	/*
	- Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
	`$message`.
	*/
	let $message = document.querySelector('textarea');
	
	/*
	- Selecione o botão de envio do formulário, atribuindo-o à uma variável
	chamada `$button`.
	*/
	let $button = document.querySelector('button');

	/*
	Preencha os campos de "Nome" e "Email" que estão no documento com os valores
	entrados pelo usuário.
	*/
	$inputUsername.value = $username;
	$inputEmail.value = $email;

	/*
	Adicione um listener de evento de click ao botão que faça o seguinte:
	1. Verificar se todos os campos estão preenchidos:
	- Mostrar um alert para cada campo não preenchido, como abaixo:
	- Se o campo de "Nome" não estiver preenchido, mostrar:
			- "Preencha o nome do usuário!"
	- Se o campo de "Email" não estiver preenchido, mostrar:
			- "Preencha o e-mail!"
	- Se o campo de "Mensagem" não estiver preenchido, mostrar:
			- "Preencha a mensagem!"
	- Se o campo de "Email" for inválido, mostrar:
			- "Entre com um e-mail válido!"

	2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
	o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
	`isValidEmail` será criada logo abaixo).

	3. Se tudo estiver OK, pergunte ao usuário:
			- "Tem certeza que deseja enviar o formulário?"
	Se for confirmado, mostre um alerta com a mensagem:
			- "Enviado com sucesso!"
	Caso contrário, mostre um alerta com a mensagem:
			- "Não enviado."
	*/
	$button.addEventListener( 'click', (event) => {
		event.preventDefault();

		if( !$inputUsername.value )
			return alert('Preencha o nome do usuário!');
			
		if( !$inputEmail.value )
			return alert('Preencha o e-mail!');

		if( !$message.value )
			return alert('Preencha a mensagem');
			
			if( !confirm('Tem certeza que deseja enviar o formulário?') )
			return alert('Não enviado.');
			
			if( !isValidEmail($inputEmail.value) )
				return alert('Entre com um e-mail válido!');

			return alert('Enviado com sucesso');
	
		console.log('click no botão');
	}, false);

	/*
	Crie uma função chamada `isValidEmail`, que será usada na validação do
	envio do formulário.
	Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
	válido.
	As regras para validação são:
			- O nome do usuário (antes do arroba), pode ser qualquer caractere
			alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
			- Após o arroba, o domínio pode conter somente caracteres alfanuméricos
			e o underscore;
			- Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
			2 caracteres alfanuméricos;
			- O final do domínio é opcional, mas se existir, deve começar com um
			ponto, seguido de no máximo 2 caracteres alfanuméricos.

	Alguns e-mails válidos que podem ser usados para testar:
			- "meu.email+categoria@gmail.com"
			- "juca_malandro@bol.com.br"	
			- "pedrobala@hotmail.uy"
			- "sandro@culinaria.dahora"

	Alguns e-mails inválidos:
			- "walter-da-silva@maraca.br"
			- "rita-marica@titica.a.b"
			- "agua_@evida.br.com"
	*/
	
	function isValidEmail( email ) {
		const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
		return regexEmail.test( email );
	}

})( window, document );