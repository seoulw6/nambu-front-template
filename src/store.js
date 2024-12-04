import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // 정확한 경로 확인
import albumReducer from './albumSlice'; // 정확한 경로 확인


const store = configureStore({
    reducer: {
        user: userReducer,
        AlbumName: albumReducer
    },
});

export default store;




// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;

