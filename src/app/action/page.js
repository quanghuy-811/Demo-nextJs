import axios from "axios";

export const getAllProducts = async (keyword) => {
    try {
        // C1: call API từ back apistore.cybersoft.edu.vn
        // const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
        // return res.data.content;

        // c2: call API từ API routes
        const res = await axios.get(
            `http://localhost:3000/api/product?keyword=${keyword}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
        return { message: "Could not fetch data" };
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(
            `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
        );
        return response.data.content;
    } catch (error) {
        console.log(error);
        return {
            id,
            title: "Error",
            content: "Could not load product",
        };
    }
};
