import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: {
    email: "vikas@gmail.com",
   dob:  "22-04-2003",
    fullName: "Vikas Dayma",
    phoneNumber: 9343552433,
    address: "Indore",
    course: "Computer Science",
    src: "",
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    editProfile: (state,action) => {
      
      state.value=action.payload
      console.log(action.payload)
    
    },

 
  },
})


export const {editProfile} = profileSlice.actions

export default profileSlice.reducer