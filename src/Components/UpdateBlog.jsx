import React from 'react';
import { useParams } from 'react-router-dom';
import CreateBlog from './CreateBlog';

const UpdateBlog = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Blog</h2>
      <CreateBlog id={id} />
    </div>
  );
};

export default UpdateBlog;
