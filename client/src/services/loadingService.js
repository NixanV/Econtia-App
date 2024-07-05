import { json } from "react-router-dom";

const baseUrl = "http://localhost:3030/jsonstore/tovarene";

export const getAllLoading = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return result
    
    } catch (error) {
        console.log("there is an error");
    }
}

export const getOneLoading = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/${id}`);
        console.log(res);
        const result = await res.json();
        return result;
    } catch (error) {
        console.log("cant find item with that id");
    }
}
