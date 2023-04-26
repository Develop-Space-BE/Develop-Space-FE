import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { DetailData, MAW } from "../../models/Detail";
import { RootState } from "../config/configStore";

export interface DetailView {
  MAnswer: DetailData[];
  OAnswer: DetailData[];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  MAnswer: [],
  OAnswer: [],
  isLoding: false,
  error: null,
} as DetailView;

export const MyAnswer = (state: RootState) => state.detailBox.MAnswer;
export const OtherAnswer = (state: RootState) => state.detailBox.OAnswer;

// 내답변 조회
export const __getMyAnswer = createAsyncThunk(
  "getMyAnswer",
  async (payload: number | string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`answer/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getOtherAnswer = createAsyncThunk(
  "getOtherAnswer",
  async (payload: number | string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`answer/other/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 답변 작성
export const __postMyAnswer = createAsyncThunk(
  "postMyAnswer",
  async (payload: MAW, thunkAPI) => {
    try {
      const { data } = await instanceAxios.post(`answer/${payload.id}`, {
        answer: payload.answer,
      });
      // 답변 작성 통신한거 보면 배열 여러개가 생성되는 문제점 발생
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 답변 좋아요
export const __postAnswerLike = createAsyncThunk(
  "postAnswerLike",
  async (payload, thunkAPI) => {
    try {
      const data = await instanceAxios.post(``);
      console.log(data);
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
      })
      .addCase(__getOtherAnswer.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getOtherAnswer.fulfilled, (state, { payload }) => {
        state.OAnswer = payload;
      })
      .addCase(__getOtherAnswer.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default DetailBox.reducer;
