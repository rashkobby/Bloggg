import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../Utils/useFetch';
import axios from 'axios';
import { useState, useMemo, useCallback } from 'react';
import RandomNumber from '../Utils/RandomNum';
import { FaTrash, FaRegEdit } from 'react-icons/fa';
import CustomModal from '../Utils/Modal';
import { Link } from 'react-router-dom';
import Spinner from '../Utils/Spinner';

const BlogDetails = () => {
  const { _id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`https://bloggg-56sc.onrender.com/blogs/${_id}`);
  const navigate = useNavigate();
  const randomNumber = useMemo(() => RandomNumber(), []);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const avatar = useMemo(() => Math.floor(Math.random() * 10) + 10, []);

  const handleDelete = useCallback(
    (e) => {
      e.preventDefault();
      if (blog && blog._id) {
        axios.delete(`http://localhost:3000/blogs/${blog._id}`).then(() => {
          console.log('deleted successfully')
          navigate('/');
        });
      }
    },
    [blog, navigate]
  );

  const handleDeleteConfirmation = useCallback(
    (e) => {
      e.preventDefault();
      setModalIsOpen(true);
    },
    []
  );

  const handleCloseConfirmation = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <div className="container my-24 mx-auto md:px-6">
      {error && <h2 className='text-center'>{error}</h2>}
      {isLoading && <span className='flex item-center justify-center '><Spinner className/></span>}
      {blog && (
        <section className="flex flex-col justify-center mb-32 mx-4">
          <img
            src={`https://mdbcdn.b-cdn.net/img/new/slides/${randomNumber}.jpg`}
            className="mb-6 lg:h-[400px] rounded-lg shadow-lg dark:shadow-black/20"
            alt="image"
          />

          <div className="mb-6 flex w-full items-center">
            <img
              src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (${avatar}).jpg`}
              className="mr-2 h-8 rounded-full"
              alt="avatar"
              loading="lazy"
            />
            <div className="flex flex-1 justify-between flex-col lg:items-center lg:flex-row">
              <div>
                <span>
                  {' '}
                  Published on: <u>
                    <small>{blog.date}</small>
                  </u>{' '}
                  by{' '}
                </span>
                <span className="font-medium">
                  <small> {blog.author}</small>
                </span>
              </div>
              <div>
                <button className="py-2 hover:text-neutral-500" onClick={handleDeleteConfirmation}>
                  <FaTrash />
                </button>
                <CustomModal isOpen={modalIsOpen} onClose={handleCloseConfirmation} onDelete={handleDelete} />
                <Link to={`/update/${blog._id}`}>
                  <button className="py-2 hover:text-neutral-500 mx-4 lg:ml-8">
                    <FaRegEdit />
                  </button>
                </Link>

              </div>
            </div>
          </div>

          <div>
            <h1 className="mb-6 text-3xl font-bold">{blog.title}</h1>
            <p> {blog.body} </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
