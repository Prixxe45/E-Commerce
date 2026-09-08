import {setError, setLoading, setUser} from '../state/auth.slice'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../service/auth.api';


export function useAuth(){
    const dispatch = useDispatch();

 async function handleRegister({email,contact,password,fullname}){
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
        const response = await register({email,contact,password,fullname});
        dispatch(setUser(response.user));
    } catch (error) {
        dispatch(setError(error));
    }finally{
        dispatch(setLoading(false));
    }
 }


 
 return {
    handleRegister
 }
}