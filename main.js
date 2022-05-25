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
  seleciona(['Relacionar','Cometer um crime','Avancar um ano'], (e,i) => {
  switch(i){
    case 0:
      relacoes();
    break;
    case 1:
      crime();
    break;
    case 2:
      player.idade++;
      escreve('Agora você tem ' + player.idade + ' anos');
      Object.keys(pessoas).forEach((c) => pessoas[c].forEach((pessoa) => pessoa.idade++))
      fimFrame = true;
    break;
  }
  })
  }
}
window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);