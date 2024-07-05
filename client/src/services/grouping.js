
const baseUrl = "http://localhost:3030/grouping"

export const getAllGrouping = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    console.log(result);
    return result;
}