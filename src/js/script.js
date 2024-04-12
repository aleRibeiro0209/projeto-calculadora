const entrada = document.querySelector('.teclado')
const saida = document.querySelector('.result')

entrada.addEventListener('click', e => {
    if (e.target.matches('li')) {
        
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const mudeSaida = saida.textContent

        
        // Se a tecla clicada nao tiver um action significa que e um numero
        if (!action) {
            console.log('Numero!')

            // Se o valor na saida for 0 substitui, se nao concatena o que tinha antes mais o novo valor
            if (mudeSaida === '0') {
                saida.textContent = keyContent
            } else {
                saida.textContent = mudeSaida + keyContent
            }
          }
        
        // Se a tecla clicada tiver uma acao de operacao matematica, sabemos que e um operedor
        if ( action === 'add' ||
             action === 'subtract' ||
             action === 'multiply' ||
             action === 'divide' )
        {
            key.classList.add('selected')
            console.log('Operator matematico!')
        }

        // Se a tecla clicada tiver alguma dessas acoes entao imprimi no console a acao seleciona
        if (action === 'decimal') {
            saida.textContent = mudeSaida + '.'
            console.log('Decimal!')
          } // Decimal

        if (action === 'clear') {
            saida.textContent = 0
            console.log('Limpar!')
        } // Limpa 

        if (action === 'calculate') {
            console.log('Igual!')
        } // Igual

    }
})

