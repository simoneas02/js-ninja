# 	Anotations

## Events examples

- Função genérica que adiciona listenner aos eventos que será usada para os exemplos abaixo:
```JS
  function on( element, event, callback ) {
    document.querySelector( element )
      .addEventListener( event, callback, false );
  }
```

- Função genérica que remove listenner dos eventos que será usada para os exemplos abaixo:
```JS
  function off( element, event, callback ) {
    document.querySelector( element )
      .removeEventListener( event, callback, false );
  }
```

- Adiciona e remove um evento de click que é acionado quando clicar no elemnto e realiza o que for passado na função de callback:
```JS
  function handleClick( event ) {
    event.preventDefault();
    alert('Olá sumidooo');
  }

  on( '[data-js="link"]', 'click', handleClick );
  off( '[data-js="link"]', 'click', handleClick );
```

- Adiciona um evento de input que captura o valor digitado no input:
```JS
  on('[data-js="input"]', 'input', function( event ) {
    console.log(this.value);
  });
```

- Adiciona um evento de keyup que captura o valor ao soltar uma tecla pressionada:
```JS
  on('[data-js="input"]', 'keyup', function( event ) {
    console.log(this.value);
  });
```

- Adiciona um evento de keydown que captura o valor ao pressionar uma tecla:
```JS
  on('[data-js="input"]', 'keydown', function( event ) {
    console.log(this.value);
  });
```

- Adiciona um evento de change que captura o valor alterado:
```JS
  on('[data-js="input"]', 'change', function( event ) {
    console.log(this.value);
  });
```