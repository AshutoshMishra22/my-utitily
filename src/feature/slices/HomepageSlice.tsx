import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const postDataApi = createAsyncThunk(
  "user/postDataApi",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/addLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);
export const getLinkApi = createAsyncThunk("user/getLink", async () => {
  const response = await fetch(`${baseUrl}/getLink`);
  return response.json();
});

export interface State {
  value: number;
  isLoading: boolean;
  urlList: Record<string, any>[];
}

const initialState: State = {
  value: 0,
  isLoading: false,
  urlList: [],
};

export const homepageSlice = createSlice({
  name: "Homepage",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postDataApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.urlList = action.payload;
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
      state.urlList = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  homepageSlice.actions;

export default homepageSlice.reducer;
