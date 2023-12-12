import axios from "axios"

export const FetchApi = async () => {

    const data = await axios.get("https://flux-api-beta.vercel.app/movies");

    return data.data
}

