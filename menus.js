
function relacoes(){
  escreve('Escolha uma categoria');
  seleciona(Object.keys(pessoas),(c) => {
    escreve('Escolha a pessoa');
    seleciona(pessoas[c].map((pessoa) => pessoa.nome) , (pessoa,i) => {
      escreve(pessoas[c][i].nome + ' ' + pessoas[c][i].sobrenome + '\n' + pessoas[c][i].emprego.nome + '\n' + pessoas[c][i].idade + ' anos' + '\n')
      escreve('O que voce deseja fazer com ela?');
      seleciona(acoes.filter((acao) => {
        if(player.idade>=acao.idade){
          return true;
        }
        return false;
      }).map((acao) => acao.nome), (acao,j) => {
        let conseq = amostra(acoes[j].chances);
        escreve(conseq[0] + ' ' + pessoas[c][i].nome + '\n');
        escreve('Ganhou ' + amostra(conseq[1]) + ' de ralacionamento com ' + pessoas[c][i].nome + '\n')
        fimFrame = true;
      })
    }, () => {fimFrame = true;})
  });
}