# 	Anotations

## Ajax

- `XMLHttpRequest()` --> É um objeto do window que precisa ser instanciado para fazer a requisição ajax, segue os passos ára fazer uma requisição ajax:
  1 - Instancie o objeto: `const ajax = new XMLHttpRequest();`
  2 - Abra uma conexão: `ajax.open(<protocol>, <url>);`
  3 - Envie os dados para o servidor, se tiverem dados: `ajax.send(<data>)`
```JS
  let ajax = new XMLHttpRequest();
  ajax.open('GET', '/');
  ajax.send();
```

- `onreadystatechange() ou readystatechange` --> verifica quando o estado mudou.
```JS
  ajax.addEventListener('readystatechange', function() {
    console.log('Terminou requisição')
  }, false);
```

- `readystate` --> retorna qual propriedade atual esstá pronta, possui os status:
  - 0 --> significa que ainda não iniciou a conexão.
  - 1 --> significa que conexão fo iniciada.
  - 2 --> significa que os headers estão prontos e foram recebidos.
  - 3 --> significa que está carregando o corpo do request.
  - 4 --> significa que o conteúdo foi concluído com sucesso.
```JS
  let ajax = new XMLHttpRequest();
  console.log(ajax.readyState) // 0 --> significa que ainda não iniciou a conexão. 
  ajax.open('GET', '/');
  console.log(ajax.readyState) // 1 --> significa que conexão fo iniciada.
  ajax.send();
  ajax.addEventListener('readystatechange', function() {
    console.log('Terminou requisição', ajax.readyState)
  }, false);
```

- `.status` --> retorna o status da requisição, alguns listados abaixo:
```JS
  ajax.addEventListener('readystatechange', function() {
    return isRequestOk() ? console.log('Requisição OK') :  console.log('Carregando...');
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
```

- `.responseText` --> retorna a resposta da requisição
```JS
  ajax.addEventListener('readystatechange', function() {
    return isRequestOk() ? console.log('Requisição OK', ajax.responseText) :  console.log('Carregando...');
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
```

- Tratamento de erros --> converte a resposta que vem de um documento XML em um documento e disponibiliza a resposta como um XML.
```JS
  let response ='';
  ajax.addEventListener('readystatechange', function() {
    if( isRequestOk() ) {
      try {
        response = JSON.parse(ajax.responseText);
      } catch(e) {
        response = ajax.responseText;
      }
      console.log(response)
    }

    }, false);

    function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
```