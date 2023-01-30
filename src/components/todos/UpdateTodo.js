import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails, updatePost } from "../../actions/posts";

function UpdateTodo(props) {
    const id = props.match.params.id;

    const history = useHistory();
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    const [postFormData, setPostFormData] = useState({ title: "", content: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        // adding post
        dispatch(updatePost(id, postFormData));
        history.push("/");
    };

    useEffect(() => {
        dispatch(getPostDetails(id));
    }, [dispatch, id]);

    //pre-fill the update form
    useEffect(() => {
        setPostFormData(posts);  
    }, [posts]);
    return (
        <div className="container">
            <div className="row justify-content-center align-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <h4>Update Post #{id}</h4>
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

export default UpdateTodo;
