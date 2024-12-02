import { configureStore, createSlice } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // 정확한 경로 확인

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

const store = configureStore({
    reducer: {
        user: userReducer,
        packagesName: packagesName.reducer
    },
});

export default store;




// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;

