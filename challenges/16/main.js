(function() {
  'use strict';

  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */
  /*
  some tests <3
  const name = 'simone';
  name.length;
  name.charAt(2)
  name[1]
  name.concat(' amorim', ' silva');
  name.indexOf('m')
  name.indexOf('m', 2)
  name.indexOf('m', 3)
  name.lastIndexOf('m', 3)
  name.lastIndexOf('m', 1)
  name.replace('i', '!')
  name.slice(0, 3)
  name.split()
  name.split('i')
  name.join
  name.split('')

  let newName = 'Amanda';
  newName.replace('a', '@') // '@manda'
  newName.split('a') // [ '', 'm', 'nd', '' ]
  newName.split('a').join('@') // '@m@nd@'
  newName.substring(2, 4) // 'an'
  newName.substring(2) // 'anda'
  newName.substring(1, 4) // 'man'
  newName.substring(1, 10) // 'manda'
  newName.toLowerCase() // 'amanda'
  newName.toUpperCase() // 'AMANDA'
  newName.charAt(0).toUpperCase() + newName.slice(1) //'Amanda'


  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  const name = 'Simone';

  function firstLetter( name ) {
    for( var i = 0; i < name.length; i ++ ) {
      console.log(`${name.charAt(i)} é a ${i + 1}ª letra do meu nome.`);
    }
  }

  firstLetter(name);

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
  const fullName = 'simone-amorim-silva';

  function convertName( name ) {
    const newName = name.split('-').map( (item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }).join(' ');

    return newName;
  }

  console.log(convertName( fullName ));

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  const friends = ['Talita', 'Diogo', 'Pedro', 'Liv', 'Kellen'];

  function myFriends( arr ) {
    const text = arr.reduce(( acum, item, index ) => {
      const names = friends.length - 1 === index ? ' e ' : ', ';
      
      return `${acum} ${names} ${item}`;

    }).concat(' são meus amigos.');

    return text;
  }

  console.log( myFriends(friends) );

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
  
  const n = 'Roberto';
  console.log( n.replace('to', 'ta') );

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
  
  const str = 'Fernando';
  console.log( str.substring(3) );

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  
  const myName = 'Simone';

  function changeName( myName ) {
    const arrName = myName.split('');

    const newName = arrName.reduce(( acum, item, index ) => {
      const addName = index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();

      return `${acum}${addName}`;
    }, '');

    return newName;
  }

  console.log(changeName( myName ));
})();