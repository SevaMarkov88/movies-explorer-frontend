class MainApi {
    constructor(options) {
        this.url = options.baseUrl;
        this.headers = options.headers;
    }

    _handleFetch(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: this.headers
        })
            .then(res => this._handleFetch(res));

    }


}


const mainApi = new MainApi({
    baseUrl: 'http://movies.markov.nomoredomains.work',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { mainApi };
