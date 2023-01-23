document.getElementById('formulario').addEventListener('click', pesquisarFilmes);

function pesquisarFilmes(e) {
    var filmePesquisa = document.getElementById('pesquisar').value
    buscarFilmes(filmePesquisa)
    e.preventDefault();
}
function buscarFilmes(filmePesquisa) {
    apiKey = '5c80a2a1'
    url = 'http://www.omdbapi.com/?apikey='
    axios.get(`${url}${apiKey}&s=${filmePesquisa}`)
    //axios.get('http://www.omdbapi.com/?s=' + filmePesquisa)
  .then(function (response) {
    console.log(response);
    
  })
  .catch(function (error) {
    console.log(error);
  });
}