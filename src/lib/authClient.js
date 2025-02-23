import axios from "axios";

const authClient = axios.create({
    baseURL: "http://localhost:3000/auth"
})

export const signUp = async (email, password) => {

try {
        const response = await authClient.post("/signup", {email, password})
        return response
} catch (error) {
    return {status: 400, error}
}
}
