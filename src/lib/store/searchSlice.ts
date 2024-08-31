import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchType } from '../types';

const initialState: SearchType = {
  name: '',
  userName: '',
  email: '',
  phone: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
  },
});

export const { setName, setUserName, setEmail, setPhone } = searchSlice.actions;
export default searchSlice.reducer;
