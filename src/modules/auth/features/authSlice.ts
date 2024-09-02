import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import AuthService from "../services/auth.service"; 
import { LoginRequest } from "../interfaces/login.interfaces";

interface AuthState {
    isAuthenticated: boolean
    error: string | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    error: null
}

const cookies = new Cookies()

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: LoginRequest, {dispatch}) => {
        try {
            const response = await AuthService.login(credentials.username, credentials.password);
            cookies.set('token', response.access);
            cookies.set('user', JSON.stringify(response.user));
            dispatch(login())
        } catch (error) {
            console.log(error);
            dispatch(setError())
        }
    }
)

export const logoutAsync = createAsyncThunk(
    'auth/logout',
    async (_, {dispatch}) => {
        try {
            await AuthService.logout();
            cookies.remove('token');
            dispatch(logout())
        } catch (error) {
            console.log(error)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
        setError: (state) => {
            state.error = 'Invalid credentials'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state) => {
            state.isAuthenticated = true
        })
        builder.addCase(loginAsync.rejected, (state) => {
            state.isAuthenticated = false
        })
    }
})

export const { login, logout, setError } = authSlice.actions

export default authSlice.reducer