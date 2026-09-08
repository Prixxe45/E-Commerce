import { createSlice } from '@reduxjs/toolkit'



export const AuthSlice = createSlice({
  name: 'auth',
  initialState:{
    User:null,
    loading:false,
    error:null,
  },
  reducers: {
   setUser: (state, action) =>{
    state.User = action.payload;
   },
   setLoading: (state, action) =>{
    state.loading = action.payload;
   },
   setError: (state, action) =>{
    state.error = action.payload;
   },

  },
})


export const { setUser, setLoading, setError } = AuthSlice.actions

export default AuthSlice.reducer