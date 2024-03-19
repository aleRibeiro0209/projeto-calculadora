const entrada = document.querySelectorAll('li')
const saida = document.getElementById('result').innerText

console.log(entrada);
console.log(saida);

var cont = 0
var listaConteudo = []

entrada.forEach(li => {
    listaConteudo.push(li.innerHTML)
    cont++
});

console.log(listaConteudo[9])

console.log(cont)
