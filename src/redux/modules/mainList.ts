import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { MList } from "../../models/MainpageType";

export interface MListState {
  mainList: MList[];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  mainList: [] as MList[],
  isLoding: false,
  error: null,
} as MListState;

export const __getMainList = createAsyncThunk(
  "__getMainList",
  async (payload: string, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instanceAxios.get(`/question/category/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mainList = createSlice({
  name: "mainList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getMainList.pending, (state) => {
        state.isLoding = true;
      })
      // .addCase(__getMainList.fulfilled, (state, payload) => {
      //   state.mainList = payload;
      // })
      .addCase(__getMainList.rejected, (state, payload) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default mainList.reducer;
