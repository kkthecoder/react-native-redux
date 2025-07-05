import type { RootState } from "@/store";
import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://reqres.in/api/users?delay=1', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    return (await response.json()).data as User[]
})

const usersAdaptor = createEntityAdapter<User>()

const usersSlice = createSlice({
    name: 'users',
    // initialState: {
    //     users: [] as User[],
    //     loading: false
    // },
    initialState: usersAdaptor.getInitialState({
        loading: false
    }),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // state.users = action.payload
            usersAdaptor.setAll(state, action.payload)
            state.loading = false
        })
        builder.addCase(fetchUsers.rejected, state => {
            state.loading = false
        })
    }
})

const usersSelector = usersAdaptor.getSelectors((state: RootState) => state.users)

export const selectAllUsers = usersSelector.selectAll
export default usersSlice.reducer