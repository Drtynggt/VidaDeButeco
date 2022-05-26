
function relacoes(){
  escreve('Escolha uma categoria');
  seleciona(Object.keys(pessoas),(c) => {
    if(pessoas[c].length>0){
    escreve('Escolha a pessoa');
    seleciona(pessoas[c].map((pessoa) => pessoa.nome) , (pessoa,i) => {
      escreve(pessoas[c][i].nome + ' ' + pessoas[c][i].sobrenome + '\n' + pessoas[c][i].relac + '\n' + pessoas[c][i].emprego.nome + '\n'+ pessoas[c][i].nRelac + ' de relacionamento\n' + pessoas[c][i].idade + ' anos' + '\n')
      escreve('O que voce deseja fazer com ela?');
      seleciona(acoes.filter((acao) => {
        if(player.idade>=acao.idade){
          return true;
        }
        return false;
      }).map((acao) => acao.nome), (acao,j) => {
        let conseq = amostra(acoes[j].chances);
        escreve(conseq[0] + ' ' + pessoas[c][i].nome + '\n');
        let nRelac = amostra(conseq[1]);
        escreve('Ganhou ' + nRelac + ' de ralacionamento com ' + pessoas[c][i].nome + '\n');
        pessoas[c][i].nRelac += nRelac
        fimFrame = true;
      })
    }, () => {fimFrame = true;})
    } else {
      escreve('Voce não tem nenhum conhecido nessa categoria');
      fimFrame = true;
    }
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
          if(pessoas[c].length>0){escreve('Escolha o nome da pessoa:');
            seleciona(pessoas[c].map((pessoa) => pessoa.nome) , (pessoa,j) => {
            if(crimes[e].idade<player.idade){
              let conseq = amostra(crimes[e].formas[i].conseqs);
              escreve(conseq.texto + ' ' + pessoa + '\n');
              if(conseq.letal){
                pessoas[c].splice(j,1);
                escreve('Voce matou ' + pessoa + '\n')
              } else {
                pessoas[c][j].nRelac-=conseq.relac;
                escreve('Voce perdeu ' + conseq.relac + ' de relacionamento' + '\n')
              }
              let policia = Math.floor(Math.random()*conseq.chancePolicia);
              if(policia==0){
                escreve('Os policiais te prenderam');
                seleciona(['Aceitar a prisão', 'Suborná-los'], (e2) => {
                  if(e2=='Aceitar a prisão'){
                    let anosDeCadeia = Math.floor( Math.random() * 20);
                    player.preso = anosDeCadeia;
                    escreve('Voce foi preso por ' + anosDeCadeia + ' anos' );
                    fimFrame = true;
                  }
                })
              
              } else {
                fimFrame = true;
              }
          }   else {
              escreve('Você não tem idade para isso')
              fimFrame = true;
            }
          }, () => fimFrame = true)
        } else {
            escreve('Voce não conhece ninguem nessa categoria');
        }
      })
    })
  })
}

function ocupacao(){
  if(player.idade<=4){
    escreve('Voce é muito novo para isso');
    fimFrame = true;
  } else {
    if(player.emprego == null){
        seleciona(empregos.filter(emprego => emprego.visivel!=false).map(emprego => emprego.nome), (e,i) => {
            let pergunta = amostra(perguntasEmprego);
            escreve(pergunta[0]);
            seleciona(pergunta[1], (e,j) => {
              if(j==pergunta[2]){
                escreve('Eles ficaram tão felizes com a resposta correta que te contrataram');
                player.emprego = empregos[i]; 
                let nColegas = amostra(raio(5,15));
                for(let k=0; k<nColegas;k++){
                  let genero = amostra(['Homem','Mulher']);
                  pessoas['Colegas'].push(criaPessoa(amostra(nomes[genero]), amostra(sobrenomes), amostra(raio(13,50)), 'Colega de trabalho', empregos[i], genero,amostra(raio(5,5))))
                }
                fimFrame = true;
              } else {
                escreve('Eles disseram que não estão procurando por esse tipo de funcionário')
                fimFrame = true;
              }
            })
        });
    } else {
      escreve(player.emprego.nome);
      seleciona(['Se esforçar','Surtar','Largar'], (e) =>{
        if(e=='Largar'){
          if(player.idade>=10){
            escreve('Tem certeza?')
            seleciona(['Sim','Nao'],(e) => {
              if(e=='Sim'){
                player.emprego = null;
              }
              fimFrame = true;
            })
          } else {
            escreve('Voce não tem idade para isso');
            fimFrame = true;
          } 
        }else if(e=='Surtar'){
          fimFrame = true;
        } else {
          escreve('Voce se esforçou mais para com o ' + player.emprego.nome);
          fimFrame = true;
        }
      })
    }
  }
}
