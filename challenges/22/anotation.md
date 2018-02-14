# 	Anotations

## Propriedades e métodos de funções

- `.name` --> As funções tem uma propriedade `name` que nos retorna uma string com o nome da função.

```JS
  function myFunction() {
    console.log('hiiii');
  }

  console.log('name:', myFunction.name); //name: myFunction


  /************************************/
  const myOtherFunction = () => {
    console.log('hiiii');
  }

  console.log('name:', myOtherFunction.name); //name: myFunction
```

- `.length` --> retorna a quantidade de parâmtros que função pode receber.

```JS
  function myFunction ( param1, param2, param3 ) {
    console.log('hiiii');
  }

  console.log('length:', myFunction.length); //length: 3


  /************************************/
  const myOtherFunction = ( param1, param2, param3 ) => {
    console.log('hiiii');
  }

  console.log('length:', myOtherFunction.length); //length: 3
```

- `.toString()` --> 

```JS
  function myFunction ( param1, param2, param3 ) {
    console.log('hiiii');
  }

  console.log('toString:', myFunction.toString()); 
  /*
  toString: function myFunction( param1, param2, param3 ) {
    console.log('hiiii');
  }
  */

  /**************************************** */

  const myOtherFunction = ( param1, param2, param3 ) => {
    console.log('hiiii');
  }

  console.log('toString:', myOtherFunction.toString()); 
  /*
  toString: ( param1, param2, param3 ) => {
    console.log('hiiii');
  }
  */
```

- `.call()` --> invoca a função, `myFunction.call()` e equivale a `myFunction.()`. 

```JS
  function myFunction ( param1, param2, param3 ) {
    return 'hiiii';
  }

  console.log('call:', myFunction.call()); //call: hiiii
  

  /**************************************** */

  const myOtherFunction = ( param1, param2, param3 ) => {
    return 'hiiii';
  }

  console.log( 'call:', myOtherFunction.call()); //call: hiiii
```

  > A principal utilidade ao usar o `.call()` é que consigo passar por parâmetro quem vai ser o `this` daquela função.

  ```JS
    function myFunction ( ) {
      console.log( this.lastName );
    }

    const obj = {
      lastName: 'Amorim'
    }

    const obj2 = {
      lastName: 'Silva'
    }

    myFunction.call( obj ); // Amorim
    myFunction.call( obj2 ); // Silva
  ```

> além de passar o `this` como parâmetro você também pode passar argumentos

  ```JS
  function myFunction ( text, number ) {
      console.log( this.lastName, text, number);
    }
    
    const obj = {
      lastName: 'Amorim'
    }
    
    myFunction.call( obj, 'oieee', 35 ); // Amorim oieee 35
   ```

- `.apply()` --> pode ser usado pra invocar uma função tendo o primeiro parâmetro representando o `this` daquela função, e a partir do segundo parâmetro pode ser passado um array que serão os parâmetros da função 💜

```JS
  function myFunction ( a, b, c, d ) {
    console.log( this.lastName, a, b, c, d );
  }

  const obj = {
    lastName: 'Amorim'
  }

  const obj2 = {
    lastName: 'Silva'
  }

  const arr = ['hey', 'W', 'T', 'F'];

  myFunction.call( obj, 'a', 'b', 'c', 'd' ); // Amorim a b c d
  myFunction.apply( obj2, arr ); // Silva hey W T F
```

- `.prototype` --> é o protótipo dos nossos métodos, dos nossos construtores onde é possível estender objetos, fazer herança no JS. O prototype vai ser basicamente o cara que vai usado pra estender nossos objetos.

```JS
  function MyFunction ( name, lastName ) {
    this.name     = name;
    this.lastName = lastName;
  }

  MyFunction.prototype.fullName = function() {
    return `${this.name} ${this.lastName}`;
  }

  const person = new MyFunction( 'Simone', 'Amorim' );

  MyFunction.prototype.age = 36;

  console.log( `I'm ${person.fullName()}, I have ${person.age} years old`); 
  // I'm Simone Amorim, I have 36 years old; // My name is:  Simone Amorim
```

- Uma magia negra \o/, O exemplo abaixo só funciona com o `for`.

```JS
  function myFunction () {
    for( let i = 0; i < arguments.length; i++ ) {
      console.log( arguments[i] );
    }
  }

  myFunction( 1, 2, 3, 4, 5 );
  // 1
  // 2
  // 3
  // 4
  // 5
```

- `Array.prototype` --> permite utilizar métodos já existentes como `foreach, map, reduce...` juntamente com o `.call()` e o `.apply()`.

```JS
  // foreach
  function myFunction () {
    Array.prototype.forEach.call( arguments, ( item ) => {
      console.log( item );
    })
  }

  myFunction( 1, 2, 3, 4, 5 );
  // 1
  // 2
  // 3
  // 4
  // 5

  // reduce
  function myOtherFunction () {
    const result = Array.prototype.reduce.call( arguments, ( acumulated, actual ) => {
      return acumulated +   actual;
    });

    console.log( result );
  }

  myOtherFunction( 1, 2, 3, 4, 5 ); // 15
```

- `editorconfig` --> É um configurador de editor que vai criar alguns padrões pra edição de arquivos, quando tenho um arquivo `.editorconfig` na raiz do meu projeto, eu digo que os arquivos estão configurados pra aquela configuração que passei terão sempre o padrão aplicados no meu `.editorconfig`, ele serve para padronizar nosso código