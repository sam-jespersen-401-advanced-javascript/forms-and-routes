const url = 'https://last-airbender-api.herokuapp.com';

function getRandom() {
  return fetch(url + '/api/v1/characters/random')
    .then(res => {
      return res.json();
    });
}

function getChars(search, page = 1) {
  return fetch(url + '/api/v1/characters' + `?name=${search}` + '&perPage=3' + `&page=${page}`)
    .then(res => {
      return res.json();
    });

}

function getCharById(id) {
  return fetch(url + '/api/v1/characters/' + id)
    .then(res => {
      return res.json();
    });
}

export { getRandom, getChars, getCharById };
