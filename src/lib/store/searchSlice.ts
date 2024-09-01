import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchType, SearchParamsType } from "../types";

const initialState: SearchParamsType = {
  params: {
    name: "",
    userName: "",
    email: "",
    phone: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setParams(state, action: PayloadAction<SearchType>) {
      state.params = action.payload;
    },
  },
});

export const { setParams } = searchSlice.actions;
export default searchSlice.reducer;
