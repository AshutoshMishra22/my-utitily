import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

// Add new link
export const postDataApi = createAsyncThunk(
  "utility-link/postDataApi",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/utility-link/addLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);
// Delete particular link
export const deleteDataApi = createAsyncThunk(
  "utility-link/deleteDataApi",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/utility-link/deleteLink`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);
// Retrive all link
export const getAllLinkApi = createAsyncThunk(
  "utility-link/getAllLink",
  async () => {
    const response = await fetch(`${baseUrl}/utility-link/getAllLink`);
    return response.json();
  }
);
// Retrive Search specific link
export const getLinkApi = createAsyncThunk(
  "utility-link/getLink",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/utility-link/getLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);

// Slice definition
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

export const globalSlice = createSlice({
  name: "global",
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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export default globalSlice.reducer;
