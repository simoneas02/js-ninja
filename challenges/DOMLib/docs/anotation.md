# 	Anotations

## DOM

### Propriedades
- `.parentNode` retorna o pai do elemento selecionado.

```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.parentNode);
```
  
- `.childNodes` retorna retorn uma lista dos filhos direto do elemento selecionado.

```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.childNodes);
```

- `.firstChild` retorna o primeiro filho do elemento selecionado, lembrando que as quebras de linhas (enter) contam como filhos.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.firstChild);
```

- `.lastChild` retorna o último filho do elemento selecionado, lembrando que as quebras de linhas (enter) contam como filhos.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.lastChild);
```

- `.nextSibling` retorna o último filho do elemento selecionado, lembrando que as quebras de linhas (enter) contam como filhos.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.nextSibling);
```

- `.previousSibling` retorna o último filho do elemento selecionado, lembrando que as quebras de linhas (enter) contam como filhos.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.previousSibling);
```

- `.nodeType` retorna um número baseado no tipo do nó selecionado.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.firstChild.nodeType);
```

- `.nodeValue` retorna um valor do nó selecionado.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.nodeValue);
```

- `.nodeName` retorna um nome do nó selecionado.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.nodeName);
```

- Os exemplos abaixo retornam uma coleção HTML do elemento selecionado, ou seja, aqui não entra quebras de linhas.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.children);
  console.log($main.firstElementChild);
  console.log($main.lastElementChild);
  console.log($main.nextElementSibling);
  console.log($main.childElementCount);
```

### Métodos

- `.hasAttribute('class')` retorna true se tiver o atributo passado por parâmetro, caso contrário retorna false.
```JS
const $main = document.querySelector('[data-js="main"]');
console.log($main.hasAttribute('class')); // false
```

- `.hasAttributes()` retorna true se tiver pelo menos um atributo, caso contrário retorna false.
```JS
const $main = document.querySelector('[data-js="main"]');
console.log($main.hasAttributes()); // true
```

- `X.appendChild(Y)` move o elemnto `Y` já existente, para o elemento `X`. 
```JS
  const $header = document.querySelector('[data-js="header"]');
  const $section = document.querySelector('[data-js="section"]');
  $section.appendChild($header);
```

- `X.insertBefore(Y,Z)` move o elemnto `Y` já existente, para o elemento `X`, antes do elemnto `Z` que pertence a `X`. 
```JS
  const $header = document.querySelector('[data-js="header"]');
	const $section = document.querySelector('[data-js="section"]');
	const $firstChild = $section.firstChild;
	$section.insertBefore($header, $firstChild)
```

- `cloneNode($header, $firstChild)` retorna um clone de um elemento, se o parâmetro passado for true, será clonado o conteúdo do elemento, caso seja falso, será clonado apenas o elemento. 
```JS
  const $firstChild = $section.firstChild;
  const $cloneFirstChild = $firstChild.cloneNode(true);
  $section.insertBefore($cloneFirstChild, $firstChild)
```

- `hasChildNodes()` retorna true se o elementotiver um nó de texto.
```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.hasChildNodes())
```

- `X.removeChild(Y)` remove o elemnto `Y` do elemento `X`. 
```JS
  const $main = document.querySelector('[data-js="main"]');
  const $header = document.querySelector('[data-js="header"]');
  $main.removeChild($header);
```

- `X.replaceChild(Y, Z)` troca o elemnto `Y` pelo elemento `Z`. 
```JS
  const $main = document.querySelector('[data-js="main"]');
  const $header = document.querySelector('[data-js="header"]');
  const $section = document.querySelector('[data-js="section"]');
  $main.replaceChild($header, $section);
```

- `document.createTextNode('text')` cria um nó de texto.
```JS
  const $section = document.querySelector('[data-js="section"]');
  const $textNode = document.createTextNode('yeahhhh');
  $section.appendChild($textNode);
```

- `document.createElement('text')` cria um novo elemento no DOM.
```JS
  const $section = document.querySelector('[data-js="section"]');
  const $elemnt = document.createElement('h1');
  const $textNode = document.createTextNode('yeahhhh');
  $elemnt.appendChild($textNode);
  $section.appendChild($elemnt);
```

### Atributos

```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.id);
  console.log($main.className);

  console.log($main.id = 'newClasse');
  console.log($main.className = 'newClasse');
```

```JS
  const $main = document.querySelector('[data-js="main"]');
  console.log($main.id);
  console.log($main.getAttribute('class'))
  $main.setAttribute('data-js', 'data-main')
```