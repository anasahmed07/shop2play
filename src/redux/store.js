import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slices/gameslice'
import userReducer from './slices/userslice'
import languageReducer from './slices/settingsSlice'

export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer,
        lan: languageReducer,
    },
})