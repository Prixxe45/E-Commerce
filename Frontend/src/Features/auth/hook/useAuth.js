import { useDispatch } from "react-redux";
import { setError, setLoading, setUser } from "../state/auth.slice";
import { registerUser } from "../service/auth.api";


export const useAuth = () => {
    const dispatch = useDispatch();

    const handleRegister = async({name,email,password}) => {
        dispatch(setLoading(true))
        dispatch(setError(null))
        try {
            const res = await registerUser({name,email,password})
            dispatch(setUser(res.user))
        } catch (err) {
            dispatch(setError(err.response.data))
        }finally{
            dispatch(setLoading(false))
        }
    }

    return {
        handleRegister
    }
}
