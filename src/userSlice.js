import { createSlice } from '@reduxjs/toolkit'; // 제대로 import 확인

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        userInfo: {
            name: '',
            lastVisit: '',
            visitCount: 0,
        },
        token: '',
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = {
                name: action.payload.name,
                lastVisit: action.payload.lastVisit,
                visitCount: action.payload.visitCount,
            }; // 사용자 정보 저장
            state.token = action.payload.token; // 토큰 저장
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userInfo = {
                name: '',
                lastVisit: '',
                visitCount: 0,
            };
            state.token = '';
        },
        incrementVisitCount: (state) => {
            state.VisitCount += 1; // 방문 횟수 증가
        },
        setToken: (state, action) => {
            state.token = action.payload; // 토큰 설정
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
