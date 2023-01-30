const url = " http://localhost:5000/posts";

const createPost = (newPost) =>
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });

const fetchPosts = () => fetch(url);

const fetchPostDetails = (id) => fetch(`${url}/${id}`);

const updatePost = (id, updatedPost) =>
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
    });

const deletePost = (id) => fetch(`${url} / ${id}}`, { method: "DELETE" });

export { createPost, fetchPosts, fetchPostDetails, updatePost, deletePost };
