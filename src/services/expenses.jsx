import axios from 'axios';
const baseUrl = 'http://localhost:3004/expenses'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(respone => respone.data)
}

const create = newObj => {
    const request = axios.post(baseUrl, newObj)
    return request.then(respone => respone.data)
}

const update = (id, newObj) => {
    const request =  axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(respone => respone.data)
}

const remove = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req
}

export default { getAll, create, update, remove }