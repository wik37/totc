import axios from 'axios';

export function getItems() {
    return axios
    .get("http://localhost:8081/totc", { params: { _sort: "itemName"}})
    .then(res => res.data)
    .catch(err => {console.log(res)})
}

export function getCategories() {
    return axios .get("http://localhost:8081/totc/category", { params: { _sort: "category"}})
    .then(res=> res.data)
    .catch(err => {console.log(res)})
}


