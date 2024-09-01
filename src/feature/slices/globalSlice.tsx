import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteDataApi,
  getAllLinkApi,
  getLinkApi,
  postDataApi,
  postSignInUser,
  postSignUpUser,
} from "../asyncThunk";

// Slice definition
export interface State {
  value: number;
  isLoading: boolean;
  urlList: Record<string, any>[];
  userDetails: Record<string, any>;
}

const initialState: State = {
  value: 0,
  isLoading: false,
  urlList: [],
  userDetails: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDataApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.urlList = action.payload;
    });
    builder.addCase(getAllLinkApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLinkApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.urlList = action.payload;
    });
    builder.addCase(getAllLinkApi.rejected, (state) => {
      state.isLoading = false;
      state.urlList = [];
    });
    builder.addCase(deleteDataApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.urlList = action.payload;
    });
    builder.addCase(deleteDataApi.rejected, (state) => {
      state.isLoading = false;
      state.urlList = [];
    });
    builder.addCase(getLinkApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLinkApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.urlList = action.payload;
    });
    builder.addCase(getLinkApi.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postSignInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postSignInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    });
    builder.addCase(postSignInUser.rejected, (state) => {
      state.isLoading = false;
      state.userDetails = {};
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = globalSlice.actions;

export default globalSlice.reducer;
