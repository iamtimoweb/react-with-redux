import * as api from "../api";
import * as reducer from "../reducers/postReducer";

// import { createPost, fetchAllPosts } from "../reducers/postReducer";

// create the post
const createNewPost = (post) => async (dispatch) => {
    const response = await api.createPost(post);

    if (!response.ok) {
        throw Error("failed to create post");
    }
    const data = await response.json();
    dispatch(reducer.createPost(data));
};

// fetch all the posts
const getPosts = () => async (dispatch) => {
    const response = await api.fetchPosts();

    if (response.status !== 200) {
        throw new Error("Failed to fetch data from resource");
    }
    // use the json() to return a native javascript object
    const data = await response.json();

    // dispatch the post slice
    dispatch(reducer.fetchPosts(data));
};

// get the post details
const getPostDetails = (id) => async (dispatch) => {
    const response = await api.fetchPostDetails(id);

    if (!response.ok) {
        throw new Error(`failed to fetch post with id=${id}`);
    }
    const data = await response.json();

    dispatch(reducer.fetchPostDetails(data));
};

// update the post
const updatePost = (id, updatedPost) => async (dispatch) => {
    const response = api.updatePost(id, updatedPost);

    if (!response.ok) {
        throw new Error(`failed to update post with id=${id}`);
    }

    const data = await response.json();
    console.log(data);
    dispatch(reducer.updatePost(data));
    getPosts();
};

// delete the post

export { createNewPost, getPosts, getPostDetails, updatePost };
