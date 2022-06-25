class MainApi {
   constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
    }
  
    _handleFetch(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
   }
   
   getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers
      })
        .then(res => this._handleFetch(res));
  
   }
   
   updateUserInfo(name, email) {
      return fetch(`${this._url}/users/me`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify({
            name: name,
            email: email
         })
      })
      .then(res => this._handleFetch(res));
   }

   getSaveMovies() {
      return fetch(`${this._url}/movies`, {
         method: 'GET',
         headers: this._headers
      })
      .then(res => this._handleFetch(res));
   }

   addMovie(data) {
      return fetch(`${this._url}/movies`, {
         method: 'POST',
         headers: this._headers,
         body: JSON.stringify({data})
      })
      .then(res => this._handleFetch(res));
   }

   deleteMovie(id) {
      return fetch(`${this._url}/movies/${id}`, {
         method: 'DELETE',
         headers: this._headers
      })
      .then(res => this._handleFetch(res));
   }

}

 
const mainApi = new MainApi({
   baseUrl: "http://localhost:3000",
   headers: {
     "Content-Type": "application/json",
   },
 });
 
 export { mainApi };