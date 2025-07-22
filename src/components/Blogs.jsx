import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts</p>
        </div>
      ) : (
        posts.map((post) => (
          <div>
            <p className="font-bold text-3xl">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>

            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag) => {
                return <span>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
