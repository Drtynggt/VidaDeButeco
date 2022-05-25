let fimFrame = true;
cria_pessoa('Parentes',amostra(nomes['Homem']), amostra(sobrenomes), amostra(Array.from(Array(70).keys())), 'Pai', amostra(empregos), 'Homem');
cria_pessoa('Parentes',amostra(nomes['Mulher']), amostra(sobrenomes), amostra(Array.from(Array(70).keys())), 'Mae', amostra(empregos), 'Mulher');
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
      fimFrame = true;
    break;
  }
  })
}
window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);