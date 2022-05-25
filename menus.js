
function relacoes(){
  escreve('Escolha uma categoria');
  seleciona(Object.keys(pessoas),(c) => {
    escreve('Escolha a pessoa');
    seleciona(pessoas[c].map((pessoa) => pessoa.nome) , (pessoa,i) => {
      escreve(pessoas[c][i].nome + ' ' + pessoas[c][i].sobrenome + '\n' + pessoas[c][i].relac + '\n' + pessoas[c][i].emprego.nome + '\n' + pessoas[c][i].idade + ' anos' + '\n')
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
function crime(){
  escreve('Escolha um crime');
  seleciona(Object.keys(crimes), (e) => {
    escreve('Como voce deseja cometer esse crime?');
    seleciona(crimes[e].formas.map((forma) => forma.nome),(e2,i) => {
        escreve('Quem voce deseja cometer esse crime?');
      escreve('Escolha uma categoria:');
    seleciona(Object.keys(pessoas),(c) => {
      escreve('Escolha o nome da pessoa:');
    seleciona(pessoas[c].map((pessoa) => pessoa.nome) , (pessoa,j) => {
      if(crimes[e].idade<player.idade){
        let conseq = amostra(crimes[e].formas[i].conseqs);
        escreve(conseq.texto + ' ' + pessoa + '\n');
        if(conseq.letal){
          pessoas[c].splice(j,1);
          escreve('Voce matou ' + pessoa + '\n')
        } else {
          pessoas[c][j].relac-=conseq.relac;
          escreve('Voce perdeu ' + conseq.relac + ' de relacionamento' + '\n')
        }
        fimFrame = true;
        
      } else {
        escreve('Você não tem idade para isso')
        fimFrame = true;
      }
    })
  })
    })
})
            }