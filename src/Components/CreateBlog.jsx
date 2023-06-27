import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Utils/Spinner';

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
};

const CreateBlog = ({id}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('Tech');
  const [author, setAuthor] = useState('');
  const [isPending, setisPending] = useState(false);
  const navigate = useNavigate();
  const date = getCurrentDate();

    useEffect(() => {
      if (id) {
        axios.get(`http://localhost:3000/blogs/${id}`)
          .then(response => {
            const { title, body, category, author } = response.data;
            setTitle(title);
            setBody(body);
            setCategory(category);
            setAuthor(author);
          })
          .catch(error => {
            console.error('Error fetching blog:', error);
          });
      }
    }, [id]);

    const handleApiCall = (method, url, blog) => {
      setisPending(true);
      axios({
        method,
        url, 
        data: blog,
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => {
          console.log(id ? 'Blog updated successfully' : 'New blog added');
          setisPending(false);
          navigate('/');
        })
        .catch((error) => {
          console.error(id ? 'Error updating blog:' : 'Error adding blog:', error);
          setisPending(false);
        });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, author, category, body, date };
      if (id) {
        handleApiCall('put', `http://localhost:3000/blogs/${id}`, blog);
      } else {
        handleApiCall('post', 'http://localhost:3000/blogs', blog);
      }
    };


 
  return (

    <div className="addNew mt-8 mb-16">
      <form action="POST" onSubmit={handleSubmit}>
        <div className="fields">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required maxLength="50" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="fields">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required maxLength="50"value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="fields">
          <label>Category:</label>
          <select required value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="Finance">Finance</option>
            <option value="Travel">Travel</option>
            <option value="Politics">Politics</option>
            <option value="Inspiration">Inspiration</option>
          </select>
        </div>
        <div className="fields">
          <label htmlFor="details">Content:</label>
          <textarea id="details" name="details" cols="80" rows="10"  value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button className="btn w-screen" type="submit">
            {!isPending ? (id ? 'Update' : 'Post') : (id ? <Spinner/> : <Spinner/>)}
        </button>

      </form>
    </div>
  )
}

export default CreateBlog