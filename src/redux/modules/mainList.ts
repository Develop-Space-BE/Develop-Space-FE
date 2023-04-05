import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { MList, MSList } from "../../models/MainpageType";

export interface MListState {
  mainList: MList[];
  mainSubList: MSList[];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  mainList: [] as MList[],
  mainSubList: [] as MSList[],
  isLoding: false,
  error: null,
} as MListState;

export const __getMainList = createAsyncThunk(
  "__getMainList",
  async (payload: string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`question/category/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMainSubList = createAsyncThunk(
  "__getMainSubList",
  async (payload: string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`question/subcategory/${payload}`);
      console.log("sub", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postBookMark = createAsyncThunk(
  "__postBookMark",
  async (payload: string | number, thunkAPI) => {
    try {
      const { data } = await instanceAxios.post(`question/bookmark/${payload}`);
      console.log(data);
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
      .addCase(__getMainList.fulfilled, (state, { payload }) => {
        state.mainList = payload;
      })
      .addCase(__getMainList.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      })
      .addCase(__getMainSubList.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getMainSubList.fulfilled, (state, { payload }) => {
        state.mainSubList = payload;
      })
      .addCase(__getMainSubList.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default mainList.reducer;