function conhecePessoas(){
  let random = Math.floor(Math.random()*4);
  if(random==0){
    let genero = amostra(['Homem','Mulher']);
    let pessoa = criaPessoa(amostra(nomes[genero]), amostra(sobrenomes), amostra(raio(Math.abs(player.idade-5),player.idade+5)), 'Amigo', amostra(empregos), genero, 5);
    escreve('Voce conheceu ' + pessoa.nome +  '. Ele quer ser seu amigo');
    escreve('Voce aceita?')
    seleciona(['Sim','Nao'],(e) => {
      if(e=='Sim'){
        escreve('Voce o aceitou e quer fazer uma amizade com ele para sempre !')
        pessoas['Amigos'].push(pessoa);
      } else {
        escreve('Voce o rejeitou por completo')
      }
      fimFrame = true;
    })
  }
  else {
  fimFrame = true;
  }
}
function evento(){
    conhecePessoas()
}