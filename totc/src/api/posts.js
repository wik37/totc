import axios from "axios"

export function getPosts() {
    return axios
        .get("http://localhost:3306/posts", { params: { _sort: "id"}})
        .then(res => {console.log(res)})
        .catch(err => {console.log(res)})
}