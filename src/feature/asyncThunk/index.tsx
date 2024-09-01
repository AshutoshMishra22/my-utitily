import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../utils";
// Add new link
export const postDataApi = createAsyncThunk(
  "utility-link/postDataApi",
  async (body: Record<any, any>) =>
    requestAPI("/utility-link/addLink", body, "POST")
);
// Delete particular link
export const deleteDataApi = createAsyncThunk(
  "utility-link/deleteDataApi",
  async (body: Record<any, any>) =>
    requestAPI("/utility-link/deleteLink", body, "DELETE")
);
// Retrive all link
export const getAllLinkApi = createAsyncThunk(
  "utility-link/getAllLink",
  async () => requestAPI("/utility-link/getAllLink")
);
// Retrive Search specific link
export const getLinkApi = createAsyncThunk(
  "utility-link/getLink",
  async (body: Record<any, any>) =>
    requestAPI("/utility-link/getAllLink", body, "POST")
);
// Sign Up user
export const postSignUpUser = createAsyncThunk(
  "auth/signup",
  async (body: Record<any, any>) => requestAPI("/auth/signup", body, "POST")
);
// Sign In user
export const postSignInUser = createAsyncThunk(
  "auth/signup",
  async (body: Record<any, any>) => requestAPI("/auth/signin", body, "POST")
);
