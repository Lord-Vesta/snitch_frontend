import axios from "axios";

export const fetchProducts = async()=>{
    try {
        const response = await axios.get("https://dummyjson.com/products/category/mens-shirts")
        return response;
    } catch (error) {
        throw error.response.data.message;
    }
}
