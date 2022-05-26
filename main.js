let fimFrame = true;
pessoas['Parentes'].push( criaPessoa(amostra(nomes['Homem']), amostra(sobrenomes), amostra(raio(13,50)), 'Pai', amostra(empregos), 'Homem',amostra(raio(5,5))));
pessoas['Parentes'].push(criaPessoa(amostra(nomes['Mulher']), amostra(sobrenomes), amostra(raio(13,50)), 'Mae', amostra(empregos), 'Mulher',amostra(raio(5,5))));
console.log('asadusipo');
let genero = amostra(['Homem','Mulher']);
player = {
    'nome': amostra(nomes[genero]),
    'sobrenome': amostra([pessoas['Parentes'][0].sobrenome,pessoas['Parentes'][1].sobrenome]),
    'idade': 0,
    'emprego': null,
    'genero': genero,
    'dinheiro': 0,
    'preso': 0
  }

function update() {
if(fimFrame){
  fimFrame = false;
  if(Math.floor(Math.random()*10)<3){
    evento();
  } else if(player.preso==0){
  seleciona(['Relações','Crime','Ocupação','Status','Avancar um ano'], (e,i) => {
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
      escreve(player.nome + ' ' +  player.sobrenome + '\n' + player.genero + '\n' + (player.emprego!=null && player.emprego!=empregos.find((emprego) => emprego.nome=='Escola') ? player.emprego.nome + '\n': '') + '$' +  player.dinheiro + '\n' +  (player.emprego!=null && player.emprego!=empregos.find((emprego) => emprego.nome=='Escola')? player.emprego.salarioBase + ' mensal': ''))  
      fimFrame = true;
    break;
    case 4:
      player.idade++;
      escreve('Agora você tem ' + player.idade + ' anos');
      Object.keys(pessoas).forEach((c) => pessoas[c].forEach((pessoa) => pessoa.idade++))
      fimFrame = true;
      if(player.idade==5){
        escreve('Voce entrou para a escola')
        player.emprego = empregos.find(emprego => emprego.nome=='Escola');
        let nColegas = Math.random()*15; 
        for(let k=0; k<nColegas;k++){
          let genero = amostra(['Homem','Mulher']);
          pessoas['Colegas'].push(criaPessoa(amostra(nomes[genero]), amostra(sobrenomes), amostra(raio(5,17)), 'Colega', empregos.find(emprego => emprego.nome=='Escola'), genero,amostra(raio(5,5))))
                }
      }
      if(player.emprego!=null && player.emprego!=empregos.find((emprego) => emprego.nome=='Escola')){
        player.dinheiro += player.emprego.salarioBase*12/5*2;
      }
    break;
  }
  })
  } else {
    cadeia();
    player.preso--;
    if(player.preso==0){
      escreve('Voce saiu da cadeia');
    }
  }
}
window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);