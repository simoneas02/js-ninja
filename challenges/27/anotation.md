# 	Anotations

## Eventos

- `.document.createDocumentFragment()` permite criar os elemntos do DOM com performance, pois manipular o dom é muito lento, pois o browser precisa fazer toda uma renderização quando criamos uma página e quando precisamos modificar qualquer elemento da página o DOM tem que renderizar novamente os elementos para mantê-los na posição correta que ele deveria está, fazendo o repent, reflow, mantendo o fluxo para que o elemnto que vcc manipulou não quebre o documento, o que ele faz na verdade é ajustar o fluxo de todos os elementos para que ele fique na posição correta.  

A ideia do `createDocumentFragment()` é para que você crie um fragmento do documento que basicamente cria um fragmento simbólico que não é real, como se fosse um documento em branco para que seja possível maniplar os nós, e assim que terminar de manipular esses nós você possa incluir esses nós no seu HTML, isso deixa a performance do teu projeto muito melhor, porque você trabalha tudo fora do DOm, para quando você for incluir os elementos no DOM você inclua tudo de uma vez fazendo o reflow e repent de uma única vez, fazendo com que o browser tenha menos trabalho que teria ao incluir os elementos um por um, mantendo a qualidade e performance da aplicação.
  - `.parentNode === null`
  - `.nodeType === 11`

```JS
  const fragment = document.createDocumentFragment();
  const $p = document.createElement('p');
  const textNode = document.createTextNode("I'm a text for p");
  $p.appendChild(textNode)
  fragment.appendChild($p);

  document.body.appendChild(fragment);
```

- Eventos --> a posição dos scripts no HTML importa, se você incluir o script no topo do seu HTML e  ele tiver que manipular elementos que ainda não foram carregados, quando chega na linha do script, o browser para a renderização e tentará executar o script, retornado um erro que o elemento não existe...

- `.DOMContentLoaded()` --> é um evento do document que diz é disparado exatamente no momento em que todo nosso documento for carregado, isso independe de conteúdo interno no HTML, imagens ou qualquer coisa que ainda não tenha sido carregado, geralmente é utilizado quando rpecisamos carregar elementos HTML e espera-se que eles ainda não estejam prontos mesmo pra ser manipulados, ouseja, eu só preciso que esse elemento exista na tela, independente dele carregar ou não.
```JS
  function afterDOMContentLoaded() {	
    const fragment = doc.createDocumentFragment();
    const $p = doc.createElement('p');
    const textNode = doc.createTextNode("I'm a text for p");
    $p.appendChild(textNode)
    fragment.appendChild($p);

    doc.body.appendChild(fragment);
  }

  doc.addEventListener('DOMContentLoaded', afterDOMContentLoaded, false);
  ```

  - `.load()` --> é um evento que vai esperar no caregamento do window qualquer coisa, desde que esse carregamento não seja assíncrono, então ele esperará tudo carregar primeiro pra depois disparar esse evento.
```JS
  function afterWndowLoad() {
		alert('afterWndowLoad()');
	}
	window.addEventListener('load', afterWndowLoad, false);
  ```

## Técnincas Ninjas

- Copiar arrays
```JS
  // Passando por referência de objeto
  var arr = [1, 2, 3, 4];
  var arr2 = arr;
  console.log(arr, arr2, arr === arr2); // (4) [1, 2, 3, 4] (4) [1, 2, 3, 4] true

  // Map
  var arr = [1, 2, 3, 4];
  var arr2 = arr.map(( item ) => {
    return item;
  });
  console.log(arr, arr2, arr === arr2); // (4) [1, 2, 3, 4] (4) [1, 2, 3, 4] false

  // Slice
  var arr = [1, 2, 3, 4, 5];
	var arr2 = arr.slice( 2, 4 );
  console.log(arr, arr2, arr === arr2); // (5) [1, 2, 3, 4, 5] (2) [3, 4] false
  
  const $links = document.querySelectorAll( 'a' );
	const $copyLinks = Array.prototype.slice.call( $links )
  console.log($links, $copyLinks	, $links === $copyLinks	); // NodeList(2) [a, a] (2) [a, a] false
  
  func
```

- Como saber o tipo de dado real de um elemento?
```JS
  const arr = [1, 2, 3, 4];
  console.log(Object.prototype.toString.call(arr)); // [object Array]
  console.log(typeof(arr)); // object

  function myFunction() {
    console.log(Object.prototype.toString.call(myFunction));
  }
  myFunction(); // [object Function]

  function is( obj ) {
    return Object.prototype.toString.call( obj );
  }

  function isArray( obj ){
    return is(obj) === `[object Array]`;
  }

  console.log(is([1, 2, 3, 4])); // [object Array]
  console.log(isArray([1, 2, 3, 4])); // true
```