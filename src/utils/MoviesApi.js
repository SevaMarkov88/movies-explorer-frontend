class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    }).then(handleOriginalResponse);
  }
}

const handleOriginalResponse = (res) => {
  if (res.ok) {
    return res.json().then((result) => result);
  }

  res
    .json()
    .then((result) => console.log('Api error:', result))
    .catch((err) => console.log('Api error:', err));

  return Promise.reject(`Error: ${res.status}`);
};

const basicHeaders = {
  'Content-Type': 'application/json',
  'User-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
};

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: basicHeaders,
});

export default moviesApi;
