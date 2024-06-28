
const baseUrl = "http://localhost:3030/users";

export const login = async (data) => {
    const response = await fetch(`${baseUrl}/login`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        }
    )
    if (response.status === 204){
        return {}
    }
    const result = await response.json();

    return result;
}
