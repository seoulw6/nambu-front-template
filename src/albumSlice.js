import { createSlice } from '@reduxjs/toolkit';

let albumSlice = createSlice({
    name: 'albumName',
    initialState: {
        albumName: '',
        albumInfo: null
    },
    reducers: {
        setAlbumName: (state) => {
            return state
        }
    }
})

export const { setAlbumName } = albumSlice.actions;
export default albumSlice.reducer;