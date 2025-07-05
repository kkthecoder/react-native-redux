import { colorsApi } from '@/features/colors/colorsSlice'
import messageReducer from '@/features/message/messageSlice'
import usersReducer from '@/features/users/usersSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        message: messageReducer,
        users: usersReducer,
        [colorsApi.reducerPath]: colorsApi.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(colorsApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>