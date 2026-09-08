import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Features/auth/state/auth.slice'

export const store = configureStore({
  reducer: AuthReducer,
})
