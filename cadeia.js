function cadeia(){
  seleciona(['Relações','Avancar um ano'], (e) => {
    switch(e){
      case 'Relações':
        relacoes_cadeia();    
      break;
      case 'Avancar um ano':
        player.idade++;
        escreve('Agora você tem ' + player.idade + ' anos');
      Object.keys(pessoas).forEach((c) => pessoas[c].forEach((pessoa) => pessoa.idade++))
      fimFrame = true;    
      break;
    }
  })
}
function relacoes_cadeia(){
    if(pessoas['Colegas'].length>0){
    escreve('Escolha a pessoa');
    seleciona(pessoas['Colegas'].map((pessoa) => pessoa.nome) , (pessoa,i) => {
      escreve(pessoas['Colegas'][i].nome + ' ' + pessoas['Colegas'][i].sobrenome + '\n' + pessoas['Colegas'][i].relac + '\n' + pessoas['Colegas'][i].emprego.nome + '\n'+ pessoas['Colegas'][i].nRelac + ' de relacionamento\n' + pessoas['Colegas'][i].idade + ' anos' + '\n')
      escreve('O que voce deseja fazer com ela?');
      seleciona(acoesCadeia.filter((acao) => {
        if(player.idade>=acao.idade){
          return true;
        }
        return false;
      }).map((acao) => acao.nome), (acao,j) => {
        let conseq = amostra(acoesCadeia[j].chances);
        escreve(conseq[0] + ' ' + pessoas['Colegas'][i].nome + '\n');
        let nRelac = amostra(conseq[1]);
        escreve('Ganhou ' + nRelac + ' de ralacionamento com ' + pessoas['Colegas'][i].nome + '\n');
        pessoas['Colegas'][i].nRelac += nRelac
        fimFrame = true;
      })
    }, () => {fimFrame = true;})
    } else {
      escreve('Voce não tem nenhum conhecido nessa categoria');
      fimFrame = true;
    }
}