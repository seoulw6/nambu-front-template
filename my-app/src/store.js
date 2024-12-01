import { configureStore, createSlice } from "@reduxjs/toolkit";

let user =
createSlice({
    name: 'user',
    initialState: 'Kyung'
})

let packagesName =
createSlice({
    name: 'packagesName',
    initialState: 'A0 초급 Reading',
    reducers: {
        setPackagesName: (state) => {
            return state
        }
    }

})


export default configureStore({
    reducer: {
        user: user.reducer,
        packagesName: packagesName.reducer
    }
})