import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      
      state.value.push(action.payload);
      console.log(action.payload)
    },
   removeFromCart: (state,action) => {
      
        state.value=state.value.filter((item,index)=>{
         
         return    index != action.payload 
        }
        )
      },


 
  },
})


export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer