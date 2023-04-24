import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { RootState } from "../config/configStore";

export interface DetailView {
  MAnswer: {};
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  MAnswer: {},
  isLoding: false,
  error: null,
} as DetailView;

export const MyAnswer = (state: RootState) => state.detailBox.MAnswer;

export const __getMyAnswer = createAsyncThunk(
  "getMyAnswer",
  async (payload: number | string, thunkAPI) => {
    try {
      const { data } = await instanceAxios(`answer/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DetailBox = createSlice({
  name: "DetailBox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getMyAnswer.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getMyAnswer.fulfilled, (state, { payload }) => {
        state.MAnswer = payload;
      })
      .addCase(__getMyAnswer.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default DetailBox.reducer;
