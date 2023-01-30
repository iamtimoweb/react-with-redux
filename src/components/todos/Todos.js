import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

function Todos() {
    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state.posts);

    //console.log("All posts returned: ", posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const handleDelete = (id) => {
        fetch("http://localhost:8000/posts/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (!res.ok) {
                throw Error("failed to delete resource");
            }
        });
        // .then(() => getAllPosts());
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-0">
                        <div className="card-header bg-white d-flex justify-content-between">
                            <h4 className="card-title">All Posts</h4>
                            <Link to="/create" className="btn btn-primary btn-sm">
                                Create New Post
                            </Link>
                        </div>
                        <div className="card-body">
                            <table id="example1" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="5%">Id</th>
                                        <th width="30%">Title</th>
                                        <th width="50%">Content</th>
                                        <th width="15%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts && posts.length > 0 ? (
                                        posts.map((post, index) => {
                                            return (
                                                <tr key={post.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <Link className="btn btn-link" to={"/post/" + post.id}>
                                                            {post.title}
                                                        </Link>
                                                    </td>
                                                    <td>{post.content.substring(0, 70) + "...."}</td>
                                                    <td>
                                                        <Link to={"/post/" + post.id + "/update"} className="btn btn-success btn-sm">
                                                            Edit
                                                        </Link>
                                                        <button type="button" onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm ms-1">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                                No post items
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;
