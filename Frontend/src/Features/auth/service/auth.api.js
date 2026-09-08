import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true,
});

export async function register({email, contact, password, fullname}){
    try{
        const response = await api.post("/register",
        {
            email,
            contact,
            password,
            fullname
        });
        return response.data;
    }catch(error){
        throw error.response.data.message || "Registration Failed";
    }
}