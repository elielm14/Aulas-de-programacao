function contar(){
    var ini= document.getElementById('textin')
    var fim = document.getElementById('textfi')
    var pas = document.getElementById('textpa')
    var res= document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
         res.innerHTML=`[ERRO Tente novamente]`
    }


    else{
        res.innerHTML=`Contando:`
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(pas.value)
       if(i < f){
       for(var c = i; c <= f; c += p){
        //+= no res abaixo é para repetir todos resultados ate o fim
         res.innerHTML += `${c} &#x1F449` }
        }
            else{
                for(var c = i; c >= f; c -= p){
                    //+= no res abaixo é para repetir todos resultados ate o fim
                    res.innerHTML += `${c} &#x1F449`
            }
        }
            
        res.innerHTML += `&#x270B`

    }


}