import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBlog = ({ match, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/${match.params.id}`);
        setFormData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [match.params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch(`/blogs/${match.params.id}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(res.data);
      history.push('/blogs');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
