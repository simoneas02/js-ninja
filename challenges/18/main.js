(function() {
  'use strict';

  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

   /*

  Anotations

  - \s --> espaços em branco --> texto.match(/\s/g);
  - \S --> faz o match com todos caracteres q não sejam espaços em branco--> texto.match(/\S/g) --> texto.match(/\S\s/g) --> pega todos os carcteres
  - \t --> tabulação --> texto.match(/\t/g);
  - \n -->  quebra de linha --> texto.match(/\n/g);
  - \W -->  faz o match com todos caracteres q não sejam alfanuméricos --> texto.match(/\W/g);
  - \D -->  faz o match com todos caracteres q não sejam números --> texto.match(/\D/g);
  - . --> o ponto representa qualquer tipo de caracter menos quebra de linha --> texto.match(/./g);
  - ^ --> representa a negação dentro de uma lista  --> texto.match(/[^abc]/g); // faz o match com todos caracteres menos com 'a, b ou c';
  - {} --> reprenta um intervalo --> texto.match(/\d{2, 4}/g); retorna um número que começa com no mínimo 2 dígitos e no máximo 4
           texto.match(/\d{2,}/g); retorna um número que começa com no mínimo 2 dígitos e no máximo quanquer quantidade
           texto.match(/\d{2}/g); retorna um número que tenha apenas 2 dígitos
  - ? --> representa um valor opcional --> texto.match(/\d\s?/g); --> eu quero um dígito que pode ser ou não seguido de um espaço em branco;
  - [] --> reprenta uma lista
  - + --> uma mais vezes seguidas --> texto.match(/\d?/g) --> faz o match com um ou infinito dígitos...
  - + --> zero ou mais vezes seguidas -->  --> faz o match com zero ou infinito dígitos...
  - () --> reprenta uma captura de argumento 

  regexEmail = /[\w+]+@\w+\.\w+\.?([\w]{2})?/
  regexRequest = /[?&](\w+)=(\w+)/
  
  */

  /*
  Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
  retorne esse CPF limpo (somente os números).
  Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
  eles! Use um console.log para cada CPF.
  - "049-214 3421-1"
  - "210.458.522-05"
  - "735 500 794 - 22"
  - "101.123-131x32"
  */
  console.log( 'Limpando CPFs:' );

  function cleanCPF( cpf ) {
    return cpf.replace(/\D/g, '');
  }

  const cpfs = [
    '049-214 3421-1',
    '210.458.522-05',
    '735 500 794 - 22',
    '101.123-131x32'
  ];

  cpfs.forEach(( cpf ) => {
    return console.log( cleanCPF(cpf) );
  })

  /*
  Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
  Ex.: "999.999.999-99"
  Mostre o resultado no console.
  */
  console.log( '\nFormatando CPFs corretamente:' );

  const regexCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/g;

  function formatCpf( regex, group1, group2, group3, group4 ) {
    return `${group1}.${group2}.${group3}-${group4}`
  }
  
  cpfs.forEach(( cpf ) => {
    return console.log( cleanCPF(cpf).replace( regexCPF, formatCpf ) );
  })

  /*
  Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
  usando o mínimo de caracteres possíveis na regex.
  Para garantir que a regex funciona, teste-a usando o método match. Se houver
  o match, o método retorna um array com os matches. Caso contrário, ele
  retornará null.
  Mostre no console o resultado do match para a frase:
  "Os meses de janeiro, junho e julho começam com a letra j."
  O resultado deve ser:
  ["junho", "julho"]
  */
  console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
  const text = 'Os meses de janeiro, junho e julho começam com a letra j.'

  console.log(text.match(/ju[nl]ho/g));

  /*
  Crie uma expressão regular que faça o match com a abertura de uma tag
  HTML qualquer.
  Ex.: "<div>", "<section>", "<blockquote>".
  Use o método match e faça o teste com a marcação abaixo:
  "<div><section><blockquote>Texto <img /></blockquote></section></div>"
  O resultado deve ser:
  ["<div>", "<section>", "<blockquote>"]
  */
  console.log( '\nMatch com a abertura de uma tag HTML:' );
  const tag = '<div><section><blockquote>Texto <img /></blockquote></section></div>';

  console.log(tag.match(/<\w+>/g));
  
  /*
  Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
  com a abertura e fechamento da tag.
  Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
  Use o método match e faça o teste com a marcação abaixo:
  "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
  O resultado deve ser:
  ["<li></li>", "<li></li>", "<span></span>"]
  */
  console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
  const tag2 = '<div><ul><li></li><li></li><li><span></span></li></ul></div>';
  
  console.log(tag2.match(/<\w+><\/\w+>/g));

  /*
  Vamos complicar um pouco agora :D

  Crie uma expressão regular que faça o match com um texto existente dentro de
  uma tag HTML. O texto deve ser capturado e substituído por:
  'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

  Use a marcação abaixo para fazer o replace:
  "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

  A marcação deve permanecer como está, somente o texto deve ser substituído.
  No replace, utilize quebras de linha para deixar uma tag por linha.

  O resultado deve ser esse:
  <h1>O texto dentro da tag "h1" é "Título da página"</h1>
  <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
  <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

  Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
  https://regex101.com/#javascript e verifique se as capturas estão
  corretas, para depois aplicar no código ;)
  */
  console.log( '\nFazer replace dos textos das tags:' );
  
  const tagText = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';

  console.log(tagText.replace( /<(\w+)>([^<]+)<\/\w+>/g, `<$1>O texto dentro da tag '$1' é '$2'</$1>\n` ));

})();