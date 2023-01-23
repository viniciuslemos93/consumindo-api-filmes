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
  .then(function (response) {
    console.log(response);
    var filmes = response.data.Search;
    var mostrarFilmes = '';

    for (var i = 0; i < filmes.length; i++) {
        mostrarFilmes += `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="${filmes[i].Poster}" class="img-thumbnail">
                    <h4>${filmes[i].Title}</h4>
                    <p><a href="#"class="btn btn-primary" role="button" onclick="filmeDetalhes('${filmes[i].imdbID}')">Ver Detalhes</a></p>
                </div>
            </div>
        `;
    }
    document.getElementById('filmes').innerHTML = mostrarFilmes;
  })
  .catch(function (error) {
    console.log(error);
  });
}

function filmeDetalhes(id) {
  sessionStorage.setItem('filmeId', id);
  window.location = 'detalhes.html'
  return false;
}

function mostraFilme() {
  var filmeId = sessionStorage.getItem('filmeId');

  apiKey = '5c80a2a1'
  url = 'http://www.omdbapi.com/?apikey='
    axios.get(`${url}${apiKey}&i=${filmeId}`)    
  .then(function (response) {
    var filme = response.data
    console.log(filme);
    
  })
    .catch(function (error) {
      console.log(error);
    });
}