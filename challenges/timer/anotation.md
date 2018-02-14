# 	Anotations

## setTimeout()

`setTimeout( function, intervalo_milesegundos )` --> executa o que estiver dentro da função após o tempo definido no segundo parâmetro.

```JS
  setTimeout(()=> {
    console.log('executou setTimeout()')
  }, 3000);
```

```JS
  let counter = 0;
  let $button = document.querySelector('[data-js="button"]');
  let stopTimer;

  function timer() {
    console.log( 'timer', counter++ );
    
    if(counter > 20) 
      return;

    stopTimer = setTimeout( timer, 1000 );
    console.log('stopTimer', stopTimer);
  }

  timer();

  $button.addEventListener('click', () => {
    clearTimeout(stopTimer);
  }, false)
```

## setInterval()

setInterval( function, intervalo_milesegundos ) --> executa o que estiver dentro da função a cada período de tempo definido no segundo parâmetro.

```JS
  setInterval(()=> {
    console.log('executou setInterval()')
  }, 3000);
```

```JS
  let counter = 0;
  let $button = document.querySelector('[data-js="button"]');
  let stopTimer;

  function timer() {
    console.log( 'timer', counter++ );
  }

  stopTimer = setInterval( timer, 1000 );

  $button.addEventListener('click', () => {
    clearInterval(stopTimer);
  }, false)
```
