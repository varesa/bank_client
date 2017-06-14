
class Api {

    constructor() {
        this.URL = "http://127.0.0.1:8000/api";
    }

    register(user, password) {
        let data = new FormData();
        data.append("account", user);
        data.append("password", password);

        fetch(this.URL + "/account/register",
            {
                method: 'POST',
                body: data
            })
        .then(function(result) {
                console.log(result.body);
        });
    }

    authenticate(user, password, callback) {
        let data = new FormData();
        data.append("account", user);
        data.append("password", password);

        fetch(this.URL + "/account/authenticate",
            {
                method: 'POST',
                body: data
            })
            .then(function(result) {
                result.json().then(function(o) {
                    callback(o);
                });
            });
    }
}

export default Api;