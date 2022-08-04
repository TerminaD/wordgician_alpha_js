import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  isRegistered: false,
  userName: '',
  uuid: '',
  passcode: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerAccount: (state) => {
      state.isRegistered = true
    },

    setUserName: (state, action) => {
      state.userName = action.payload
    },

    setUUID: (state) => {
      var result = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * 10))
      }
      state.uuid = result
    },

    setPasscode: (state, action) => {
      state.passcode = action.payload
    },

    clearAll: (state) => {
      state.isRegistered = false
      state.userName = ''
      state.uuid = ''
    },
  },
})

export const { registerAccount, setUserName, setUUID, setPasscode, clearAll } = registerSlice.actions

// Export functions for useSelector hook
export const getRegisterStatus = (state) => state.register.isRegistered
export const getUserName = (state) => state.register.userName
export const getUUID = (state) => state.register.uuid

export default registerSlice.reducer
