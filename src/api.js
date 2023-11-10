import axios from "axios";
import config from "./config";

export const HTTP = axios.create({
    baseURL: config.MOCK
});

export default {
    async getProduct(id) {
        try {
            const response = await HTTP.get(`/products/${id}`, {
                headers: {
                    Prefer: `code=200, example=Example ${id}`
                }
            });
            console.log(response.data)
            return response.data;
        }catch (e) {
            console.log(e);
        }
    },
    async getPopularProducts() {
        try {
            const response = await HTTP.get("/products/popular");
            console.log(response.data)
            return response.data;
        }catch (e) {
            console.log(e);
        }
    }
}