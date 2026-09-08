import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/auth",
    withCredentials:true
})

export const registerUser = async({name,email,password}) =>{
    const res = await api.post('/register',{name,email,password})
    return res.data
}

