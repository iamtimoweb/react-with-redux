import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        createPost: (state, action) => {
            state.posts = action.payload;
        },
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
        fetchPostDetails: (state, action) => {
            state.posts = action.payload;
        },
        updatePost: (state, action) => {
            state.posts = action.payload;
        },
        deletePost: (state, action) => {
            state.posts.filter((post) => post.id !== action.payload);
        },
    },
});

export const { createPost, fetchPosts, fetchPostDetails, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
