import { createSlice } from "@reduxjs/toolkit";

interface Istate {
    clients: Array<string>
    errorLoading: boolean
    loading: boolean
    access: boolean
}

const initialState: Istate = {
    clients: [],
    errorLoading: false,
    loading: false,
    access: false
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clientsUpdate: (state, action) => {
            state.clients = [...state.clients, ...action.payload]
        },
        accessUpdate: (state, action) => {
            state.access = action.payload
        },
        loadingUpdate: (state, action) => {
            state.loading = action.payload
        },
        errorLoadingUpdate: (state, action) => {
            state.errorLoading = action.payload
        },
    }
});

const {actions, reducer} = clientsSlice;

export default reducer;

export const {
    clientsUpdate,
    accessUpdate,
    loadingUpdate,
    errorLoadingUpdate
} = actions;