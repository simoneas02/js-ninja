/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const myArray = ['Be strong', NaN, true, {}, 37, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const returnMyArray = (myArray) => {
	return	myArray;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnMyArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const stars = ['Lea Verou', 'Una Kravets', 'Rachel Andrew', 'Jen Simmons', 'Sarah Drasner'];
const showStars = (isArray, index) => {
	return isArray[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const newValues = [255, 'go go go Simone', true, '', {}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(showStars(newValues, 0));
console.log(showStars(newValues, 1));
console.log(showStars(newValues, 2));
console.log(showStars(newValues, 3));
console.log(showStars(newValues, 4));
console.log(showStars(newValues, 5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (bookName) => {

	const books = {
		"The New CSS Layout": {
			quantidadePaginas: 131,
    	autor: "Rachel Andrew",
    	editora: "A Book Apart"
		},

		"CSS Secrets": {
			quantidadePaginas: 370,
    	autor: "Lea Verou",
    	editora: "O'Reilly Media"
		},

		"You Don't Know JS AsyncAndPerformance": {
			quantidadePaginas: 296,
    	autor: " Kyle Simpson",
    	editora: "O'Reilly Media"
		}
	}

	return bookName ?  books[bookName] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());	

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const bookName = "The New CSS Layout";
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`)