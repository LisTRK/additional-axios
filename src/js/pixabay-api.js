import axios from "axios";

const API_KEY = "49287567-80da5b96f25a95ab41aa198b2";
const BASE_URL = "https://pixabay.com/api/";


export function getImages(searchQuery) {
    const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    }
     return axios(`${BASE_URL}`, { params }).then((response) => response.data);

}