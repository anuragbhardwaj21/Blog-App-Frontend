import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>Category: {blog.category}</p>
      <p>Author: {blog.author}</p>
      <p>{blog.content}</p>
      {blog.image && <img src={blog.image} alt={blog.title} />}
    </div>
  );
};

export default Blog;
