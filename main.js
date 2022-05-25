let fimFrame = true;
pessoas['Parentes'].push( criaPessoa(amostra(nomes['Homem']), amostra(sobrenomes), amostra(raio(13,50)), 'Pai', amostra(empregos), 'Homem',amostra(raio(5,5))));
pessoas['Parentes'].push(criaPessoa(amostra(nomes['Mulher']), amostra(sobrenomes), amostra(raio(13,50)), 'Mae', amostra(empregos), 'Mulher',amostra(raio(5,5))));
console.log('asadusipo');
player = {
    'nome': amostra(nomes),
    'sobrenome': amostra(pessoas['Parentes'][0].sobrenome,pessoas['Parentes'][1].sobrenome),
    'idade': 0,
    'emprego': null,
    'genero': 'Homem'
  }

function update() {
if(fimFrame){
  fimFrame = false;
  if(Math.floor(Math.random()*10)<3){
    evento();
  } else {
  seleciona(['Relações','Crime','Ocupação','Avancar um ano'], (e,i) => {
  switch(i){
    case 0:
      relacoes();
    break;
    case 1:
      crime();
    break;
    case 2:
      ocupacao();
    break;
    case 3:
      player.idade++;
      escreve('Agora você tem ' + player.idade + ' anos');
      Object.keys(pessoas).forEach((c) => pessoas[c].forEach((pessoa) => pessoa.idade++))
      fimFrame = true;
      if(player.idade==5){
        escreve('Voce entrou para a escola')
        player.emprego = empregos.find(emprego => emprego.nome=='Escola');
      }
    break;
  }
  })
  }
}
window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);