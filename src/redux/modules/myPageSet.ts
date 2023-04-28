import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { Comment, UserImpormation } from "../../models/MypageType";
import { RootState } from "../config/configStore";

export interface MypageSet {
  User: UserImpormation;
  Com: Comment[];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  User: {},
  Com: [] as Comment[],
  isLoding: false,
  error: null,
} as MypageSet;

export const User = (state: RootState) => state.myPageSet.User;

// 마이페이지 좋아요 swager / Like 부분
export const __postMyPageLike = createAsyncThunk(
  "postLike",
  async (payload: number, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.post(`answer/like/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 유저 정보
export const __getUser = createAsyncThunk(
  "getUser",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`/member/info`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 내 답변 조회 swager / answer 부분
export const __getMypageComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`answer/myanswer`);
      return thunkAPI.fulfillWithValue(data);
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
        state.error = payload;
        state.isLoding = false;
      })
      .addCase(__getUser.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getUser.fulfilled, (state, { payload }) => {
        state.User = payload;
      })
      .addCase(__getUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      })
      .addCase(__getMypageComment.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getMypageComment.fulfilled, (state, { payload }) => {
        state.Com = payload;
      })
      .addCase(__getMypageComment.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default myPageSet.reducer;
