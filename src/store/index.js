import {configureStore, createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedIn: false},
    reducers:{
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        },
        clock(state){
            if(state.isLoggedIn===true){
                state.isLoggedIn = true
            }
            else{
                state.isLoggedIn = false
            }

        }
    }
});

export const { login, logout, clock } = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer
})
export const authActions = authSlice.actions;