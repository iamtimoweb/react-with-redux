import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../../actions/posts";
function TodoDetail(props) {
    const id = props.match.params.id;

    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state.posts);
   

    useEffect(() => {
        dispatch(getPostDetails(id));
    }, [dispatch, id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-0">
                        <h5 className="card-header bg-white">Showing Details for post #{id}</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <Link className="btn btn-secondary" to="/">
                                    Back
                                </Link>
                            </div>
                            <table className="table table-bordered table-striped">
                                {posts && (
                                    <tbody>
                                        <tr>
                                            <th>Id</th>
                                            <td>{posts.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Title</th>
                                            <td>{posts.title}</td>
                                        </tr>
                                        <tr>
                                            <th>Content</th>
                                            <td>{posts.content}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoDetail;
