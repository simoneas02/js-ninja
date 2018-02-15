# 	Anotations

## Debug

- `console.time` inicia a temporização do tempo de execução do código e `console.timeEnd` retorna o tempo que durou a execução.

```JS
  console.time( 'calculating time' );

  for( var i = 0; i < 10000; i++ ) {
    console.log( 'executing...' );
  }

  console.timeEnd( 'calculating time' ); // calculating time: 3119.092041015625ms
```

- `console.table` --> É um método que disponibiliza os dados em uma tabela facilitando a visualização dos dados no console.

```JS
  var books = {

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

  };

  console.table( books );
```