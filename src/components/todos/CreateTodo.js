import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../actions/posts";
function CreateTodo() {
    const [postFormData, setPostFormData] = useState({ title: "", content: "" });
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // adding post
        dispatch(createNewPost(postFormData));
        history.push("/");
    };
    return (
        <div className="container">
            <div className="row justify-content-center align-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <h4>Add New Post</h4>
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={postFormData.title}
                                onChange={(e) => setPostFormData({ ...postFormData, title: e.target.value })}
                                className="form-control"
                                placeholder="Enter post title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">
                                Content
                            </label>
                            <textarea
                                className="form-control"
                                required
                                id="content"
                                value={postFormData.content}
                                onChange={(e) => setPostFormData({ ...postFormData, content: e.target.value })}
                                placeholder="Enter post content"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTodo;
