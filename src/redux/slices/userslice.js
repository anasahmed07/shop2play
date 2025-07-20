import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        loggedIn: false,
        uid: null,
        name: '',
        game: ''

    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        Login: (state, action) => {
            const { uid, name, game } = action.payload;
            state.user = {
                loggedIn: true,
                uid: uid,
                name: name,
                game: game
            }
        },
        Logout: (state) => {
            state.user = {
                loggedIn: false,
                uid: null,
                name: '',
                game: ''
            }
        },
    },
})


export const { Login, Logout } = userSlice.actions

export default userSlice.reducer