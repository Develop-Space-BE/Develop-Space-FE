import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";

export interface MypageSet {
  myLike: [];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  myLike: [],
  isLoding: false,
  error: null,
};

export const __postMyPageLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      const data = instanceAxios.post(`answer/like/${payload}`);
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const myPageSet = createSlice({
  name: "myPageSet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__postMyPageLike.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__postMyPageLike.fulfilled, (state, { payload }) => {
        // state.myLike = payload;
      })
      .addCase(__postMyPageLike.rejected, (state, { payload }) => {
        // state.error = payload;
        state.isLoding = false;
      });
  },
});
