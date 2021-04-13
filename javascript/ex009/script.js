var numero = document.getElementById('num')
/* lista é o select que recebe os valores */
var lista = document.getElementById('ana')
var resultado = document.getElementById('res')
var valores = []


function enNumber(n){
    
    /* se o numero digitado for maior que 1 e se for menor que 100  */
    if(Number(n) >=1 && Number(n) <= 100){
    return true
    } else{
        return false}
}

function enLista(n, l){
    /* se o array(l.indexOF retorna a posiçao do numero dentro do array) não estiver vazio (retorna -1 se estivar vazio, sendo assim se o valor retornado for diferente de -1 ele não esta vazio) */
    if(l.indexOf(Number(n)) !=-1){
        return true
    } else{
        return false}

}

function adicionar(){
    /* se for um numero (enNumber vai receber a var numero) e se não estiver em lista(para nao repetir os valores digitados)(enLinsta vai receber um numero e a lista). so vai adicionar se os dois for true */
    if(enNumber(numero.value) && !enLista(numero.value, valores)){
        window.alert('tudo certo até aqui')
    } else{
        window.alert('Valor invalido ou já encontrado na lista')}

}