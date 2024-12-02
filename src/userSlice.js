import { createSlice } from '@reduxjs/toolkit'; // 제대로 import 확인

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userInfo: null,
        VisitCount: 0, // 추가
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
