import { Link } from 'react-router-dom';
import RandomNumber from '../Utils/RandomNum';

const ListBlog = ({ blogs }) => {
  
  return (
    <div className="bloglist mt-24 mb-24">
      <h1 className='text-center font-large text-md'>STORIES</h1>
      {blogs.reverse().map((blog) => {
        const randomNumber = RandomNumber();
        return (
          <div className="blog-preview" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
              <div className="mb-6 flex flex-wrap">
                <div className="mb-2 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <img src={`https://mdbcdn.b-cdn.net/img/new/standard/city/${randomNumber}.jpg`} className="w-full" alt="Louvre" />
                    <span>
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </div>
                    </span>
                  </div>
                </div>

                <div className="mb-6 items-center w-full shrink-0 grow-0 basis-auto px-3  md:mb-0 md:w-9/12 xl:w-7/12">
                  <h5 className="mb-3 text-lg text-neutral-700 dark:text-neutral-500 font-bold">{blog.title}</h5>
                  <div className="mb-3 flex text-sm font-medium text-neutral dark:text-neutral-400 md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                    {blog.category}
                  </div>
                  <p className="mb-6 text-neutral-700 dark:text-neutral-300">
                    <small>Published by <span>{blog.author}</span></small>
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    <u><small>{blog.date}</small></u>
                  </p>
                </div>
                <button className="ml-auto flex-1 text-neutral-500 dark:text-neutral-400">Click to view</button>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default ListBlog;
