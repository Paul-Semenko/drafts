import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://localhost:3001/api/users";


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('/signup', async (credentials, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/signup', credentials);
       
        token.set(data.token);
        
    } catch (error) {
        
        return rejectWithValue(alert(`Something went wrong! Please, try one more time`));
    }
    
});

export const logIn = createAsyncThunk('/login', async( credentials, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(alert(`Wrong email address or password!`));         
        
    }
});

export const logOut = createAsyncThunk('/logout', async () => {
    try {
        await axios.post('users/logout');
        token.unset();
    } catch (error) {
        
        
    }
});
