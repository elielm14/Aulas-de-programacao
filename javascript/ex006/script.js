function verificar(){
    /* var de data e ano iram puzar data e ano do sistema */
    var data = new Date()
    var ano = data.getFullYear()
    /* fano e res puxa html */
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
/* para caso de digitação invalida */
    if(fano.value.length==0 || Number(fano.value) > ano){
       window.alert('erro')
    }
    /* parametros para genero e idade */
    else{
        /* fsex arazena o click da bolinha de genero que é o CHECKED*/
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    /* criou uma tag/elemento img js(função opcional) */
    var img = document.createElement('img')
    /* essa parte é a mesma coisa que <img id="foto"> em html so que agora foi feito de forma dinâmica */
    img.setAttribute('id','foto')
    /* genero ficou vazio para receber masculino ou feminino */
        if(fsex[0].checked){
            var genero = 'Masculino'
        if(idade>=0 && idade<10){
            //criança
            /* img attribute puxa a imagem da pasta com js */
            img.setAttribute('src','bebe-homem-edit.png')
        }
        else if (idade < 18){
            //adolescente
            img.setAttribute('src','adolescente-homem-edit.png')
        }
        else if (idade < 50){
            //adulto
            img.setAttribute('src','adulto-homem-edit.png')
        }
        else{
            //idoso
            img.setAttribute('src','idoso-homem-edit.png')
        }
    }


    else if(fsex[1].checked/* item opicional */) {var genero = 'Feminino'
        if(idade>=0 && idade<10){
            //criança
            img.setAttribute('src','bebe-mulher-edit.png')
        }
        else if (idade < 18){
            //adolescente
            img.setAttribute('src','adolescente-mulher-edit.png')
        }
        else if (idade < 50){
            //adulto
            img.setAttribute('src','adulta-mulher-edit.png')
        }
        else{
            //idoso
            img.setAttribute('src','idosa-mulher-edit.png')
        }
}
        res.style.textAlign= "center"/* ccs em js */
        res.innerHTML=`Detectamos ${genero} ${idade} anos de idade.`
        //para adicionar um atributo/elemento ao texto que ja esta na tela. aqui ele adiciona o elemento img
        res.appendChild(img)
    }
    }
       