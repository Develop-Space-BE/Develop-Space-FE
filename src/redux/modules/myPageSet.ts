import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/apiConfig";
import { DetailData } from "../../models/Detail";
import { Comment, UserImpormation } from "../../models/MypageType";
import { RootState } from "../config/configStore";

export interface MypageSet {
  User: UserImpormation;
  Com: Comment[];
  Like: DetailData[];
  isLoding: boolean;
  error: unknown;
}

const initialState = {
  User: {},
  Com: [] as Comment[],
  Like: [] as DetailData[],
  isLoding: false,
  error: null,
} as MypageSet;

export const User = (state: RootState) => state.myPageSet.User;
export const myAnswerData = (state: RootState) => state.myPageSet.Com;
export const myLikeData = (state: RootState) => state.myPageSet.Like;

// 유저 정보
export const __getUser = createAsyncThunk(
  "getUser",
  async (_payload, thunkAPI) => {
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

// 내가 좋아요한 댓글 가져오기
export const __getLikeData = createAsyncThunk(
  "getLike",
  async (_payload, thunkAPI) => {
    try {
      const {
        data: {
          data: { myLikeListDtos },
        },
      } = await instanceAxios.get(`/answer/mylike`);
      return thunkAPI.fulfillWithValue(myLikeListDtos);
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
        data: {
          data: { myAnswerLists },
        },
      } = await instanceAxios.get(`answer/myanswer`);
      return thunkAPI.fulfillWithValue(myAnswerLists);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putChangeNickname = createAsyncThunk(
  "putNickname",
  async (payload: string, thunkAPI) => {
    console.log(payload);
    try {
      await instanceAxios.put("member/setting", {
        nickname: payload,
      });
      return thunkAPI.fulfillWithValue(payload);
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
      })
      .addCase(__getLikeData.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getLikeData.fulfilled, (state, { payload }) => {
        state.Like = payload;
      })
      .addCase(__getLikeData.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      })
      .addCase(__putChangeNickname.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__putChangeNickname.fulfilled, (state, { payload }) => {
        state.User = { ...state.User, nickname: payload };
      })
      .addCase(__putChangeNickname.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoding = false;
      });
  },
});

export default myPageSet.reducer;
