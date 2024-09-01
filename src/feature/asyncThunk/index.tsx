import { createAsyncThunk } from "@reduxjs/toolkit";
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
// Sign Up user
export const postSignUpUser = createAsyncThunk(
  "auth/signup",
  async (body: string) => {
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.json();
  }
);
