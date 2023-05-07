import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { DetailData, EditAnswer, MAW } from "../../models/Detail";
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

export const MyAnswer = (state: RootState) => state.detailBox.MAnswer[0];
export const OtherAnswer = (state: RootState) => state.detailBox.OAnswer;

// 내답변 조회
export const __getMyAnswer = createAsyncThunk(
  "getMyAnswer",
  async (payload: number | string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`answer/${payload}`);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 답변 좋아요
export const __postAnswerLike = createAsyncThunk(
  "postAnswerLike",
  async (payload: string | number | undefined, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.post(`answer/like/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 답변 수정
export const __putAnswer = createAsyncThunk(
  "putAnswer",
  async (payload: EditAnswer, thunkAPI) => {
    try {
      const { data } = await instanceAxios.put(`answer/${payload.AnswerId}`, {
        answer: payload.answer,
      });
      return thunkAPI.fulfillWithValue(payload.answer);
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
      })
      .addCase(__putAnswer.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__putAnswer.fulfilled, (state, { payload }) => {
        state.MAnswer[0] = { ...state.MAnswer[0], answer: payload };
      })
      .addCase(__putAnswer.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default DetailBox.reducer;
