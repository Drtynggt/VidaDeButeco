let entradaAtual = document.createElement('div');
entradaAtual.className = 'botoes'
document.body.append(entradaAtual);
let saidaAtual = document.createElement('div');
saidaAtual.className = 'saida'
document.body.append(saidaAtual);
function mudaSaida(){
  saidaAtual = document.createElement('div');
  saidaAtual.className = 'saida'
  document.body.append(saidaAtual);
}
function mudaEntrada(){
  entradaAtual = document.createElement('div');
  entradaAtual.className = 'botoes'
  document.body.append(entradaAtual);
}
function criaBotao(text,cb){
  let obj = document.createElement('button');
  obj.innerHTML = text;
  obj.className = 'botao';
  obj.onclick = cb;
  entradaAtual.append(obj);
}
function escreve(text){
  saidaAtual.innerHTML+=text;
  mudaEntrada();
    mudaSaida();

}

function seleciona(names,cb,cb2){
  let stop = false;
  if(names.length>0){
  names.forEach( (name,i) => {
    criaBotao(name,() => {
      if(!stop){
        cb(name,i);
          stop = true;
      }
    });
  });
  } else{
    cb2();
  }
  mudaSaida();
    mudaEntrada();

}
