/**
 * Created by allancutler on 5/10/16.
 */

/**
 * Return resolved or rejected promise
 *
 * @param {*} data
 * @param {Boolean} success
 * @param {String} errorMessage
 * @returns {Promise}
 */
export function MockPromise(data, success = true, errorMessage = '') {
    return new Promise((resolve, reject) => {
        success ? resolve(data) : reject(errorMessage);
    });
}
