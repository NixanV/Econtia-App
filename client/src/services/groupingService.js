
const baseUrl = "http://localhost:3030/jsonstore/grupirane"

export const getAllGrouping = async () => {
    try {
        const response = await fetch(baseUrl); 
        const result = await response.json();
        if(result.lenght === 0){
            console.log("No found data");
            return null;
        }
        return result;
    } catch (error) {
        console.log("error in receiving data");
        return null;
    }
}

export const getOneGrouping = async( id) =>{
    try{
        const response  = await fetch(`${baseUrl}/${id}`)
        const result = await response.json();
        return result;
    }
    catch (error ){
        console.log("error in receiving right data");
    }
}

export const postNewGrouping = async (data) => {
    try {
        return await fetch(baseUrl, {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)

        })
        .then(res => res.json());
    } catch (error) {
        console.log("can't post data");
        
    }
}