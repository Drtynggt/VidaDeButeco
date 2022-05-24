function cria_pessoa(categoria, nome,sobrenome,idade,relac,emprego,genero){
  pessoas[categoria].push({
    'nome': nome,
    'sobrenome': sobrenome,
    'idade': idade,
    'relac': relac,
    'emprego': emprego,
    'genero': genero
  });
  console.log(pessoas,categoria)
}
function amostra(array){
  return array[Math.floor(Math.random()*array.length)];
}