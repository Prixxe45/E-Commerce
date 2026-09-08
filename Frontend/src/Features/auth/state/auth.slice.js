import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    user:null,
    loading:false,
    error:null, 
  },
  reducers: {
   setUser:(state,action)=>{
    state.user=action.payload
   },
   setLoading:(state,action)=>{
    state.loading=action.payload
   },
   setError:(state,action)=>{
    state.error=action.payload
   }
},
})

// Action creators are generated for each case reducer function
export const { setUser, setLoading, setError } = authSlice.actions

export default authSlice.reducer