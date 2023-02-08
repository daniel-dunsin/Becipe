import axios from "axios";
const mealHttp = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1"
})