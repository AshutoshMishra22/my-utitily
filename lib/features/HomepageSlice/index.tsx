import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { GET_SEARCH_RESULTS_URL } from "@/ThunkConstant";

// Async action
export const fetchSearchResults = createAsyncThunk(
  "users/getSearchResults",
  async (thunkApi) => {
    console.log("thunkApi ", thunkApi);
    const response = await fetch(GET_SEARCH_RESULTS_URL);
    const data = await response.json();
    return data;
  }
);
// Define a type for the slice state
interface State {
  value: number;
  results: Array<Record<any, any>>;
}

// Define the initial state using that type
const initialState: State = {
  value: 0,
  results: [],
};

export const HomepageSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.results.push(...action.payload);
    });
  },
});

export const { increment, decrement, incrementByAmount } =
  HomepageSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default HomepageSlice.reducer;
