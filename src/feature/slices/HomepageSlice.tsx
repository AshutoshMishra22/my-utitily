import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

// Add new link
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
// Delete particular link
export const deleteDataApi = createAsyncThunk(
  "user/deleteDataApi",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/deleteLink`, {
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
export const getAllLinkApi = createAsyncThunk("user/getAllLink", async () => {
  const response = await fetch(`${baseUrl}/getAllLink`);
  return response.json();
});
// Retrive Search specific link
export const getLinkApi = createAsyncThunk(
  "user/getLink",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/getLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);

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
export const { increment, decrement, incrementByAmount } =
  homepageSlice.actions;

export default homepageSlice.reducer;
