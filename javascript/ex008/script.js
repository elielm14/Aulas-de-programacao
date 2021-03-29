function clicar(){
    var num = document.getElementById('textent')
    var tabu = document.getElementById('tab')
    if(num.value.length == 0){
        window.alert("[ERRO] Digite um número.")
        tabu.innerText=''
    }
    else{
        var c = 1
        var ent = Number(num.value)
        //innertext vazio serve para apagar o antigo dado
        tabu.innerText = ""

        while(c <= 10){
            //criação de item dentro do html pelo js
            var item = document.createElement('option')
        //parte de dentro da option ação que vai ser escrita(elemento item)
                    item.text = `${ent} X ${c} = ${ent*c}`
        /* adiciona um elemento filho ao tabu(caixa select) atraves da  option (item), assim tudo que foi no calculo do item sera escrito dentro da select pelo option (item) */
                    tabu.appendChild(item)
        //fim da interação com c recebendo ele mesmo e ficando maior que 10
        //c recebe todos os numeros e no ultimo (10) ele recebe c = 10 + 1 totalizando 11 e acabando a interação
                    c++
        }
       
    }
}