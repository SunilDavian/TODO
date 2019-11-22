/* eslint-disable no-console */
const API_URL = 'http://localhost:8090'

export default function sendRequest(path, opts) {
    return new Promise(async (resolve, reject) => {
        let headers = Object.assign({}, opts.headers || {}, {
            'Content-type': 'application/json; charset=UTF-8'
        });

        try {
            let response = await fetch(
                `${API_URL}${path}`,
                Object.assign({ method: 'POST' }, opts, { headers })
            );

            return response.json().then(data => {
                resolve(data);
            }).catch(err => reject(err));

        } catch (error) {
            console.error(path, error);

            reject(error);
        }
    });
}