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
  relacoes();
}
window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);