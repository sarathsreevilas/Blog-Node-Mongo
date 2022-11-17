import "./singlePost.css";
import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }
    getPost()
  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (

          <img
            className="singlePostImg"
            src={post.photo}
            alt=""
          />
        )}
        <h1 className="singlePostTitle">
            {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.craetedAt).toDateString}</span>
        </div>
        <p className="singlePostDesc">
         {post.desc}
        </p>
      </div>
    </div>
  );
}
