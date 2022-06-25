class MoviesApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _handleFetch(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    getMovies() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        }).then(this._handleFetch);
    };
};

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default moviesApi;
