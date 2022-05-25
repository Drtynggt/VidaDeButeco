function criaPessoa( nome,sobrenome,idade,relac,emprego,genero){
  return {
    'nome': nome,
    'sobrenome': sobrenome,
    'idade': idade,
    'relac': relac,
    'emprego': emprego,
    'genero': genero
  };
}
function amostra(array){
  return array[Math.floor(Math.random()*array.length)];
}
function raio(comeco, fim) {
    return [...Array(fim+1).keys()].map(i => i + comeco);
}