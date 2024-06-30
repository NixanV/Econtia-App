import { json } from "react-router-dom";

const baseUrl = "http://localhost:3030/jsonstore/tovarene";

export const getAllLoading = async (data) => {
    try {
        const response = await fetch(baseUrl);
        console.log(response);
        const result = await response.json();
        console.log(result);
        return result
    
    } catch (error) {
        console.log("there is an error");
    }
}