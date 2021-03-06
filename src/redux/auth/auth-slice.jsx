import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut} from './auth-operations';

const initialState = {
    user: {password:null, email:null},
    token: null,
    isLoggedIn: false,
    
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, _) {
            state.user = { password: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },        
    },
});

export default authSlice.reducer;