import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import detailsReducer from './courseDetails'
import profileReducer from './profileSlice'
import cartReducer from './CartSlice'
export const store = configureStore({
  reducer: {
    data: dataReducer,
    details:detailsReducer,
    profile:profileReducer,
    cart :cartReducer,

  },
})