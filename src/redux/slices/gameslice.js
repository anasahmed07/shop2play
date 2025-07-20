import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'freefire',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleToFF: (state) => {
            state.value = 'freefire'
        },
        toggleToDF: (state) => {
            state.value = 'deltaforce'
        },
    },
})


export const { toggleToFF, toggleToBC, toggleToDF } = gameSlice.actions

export default gameSlice.reducer