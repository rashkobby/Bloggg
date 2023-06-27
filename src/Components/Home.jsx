import ListBlog from "./ListBlog";
import useFetch from "../Utils/useFetch";
import Spinner from "../Utils/Spinner";



const Home = function () {
  const { data: blogs, isLoading, error } = useFetch('https://bloggg-56sc.onrender.com/blogs/');

  return (
    <div className="Home">
      {error && <h2>{error}</h2>}
      {isLoading && <span className='flex item-center justify-center mt-32 '><Spinner/></span>}
      {blogs && <ListBlog blogs={blogs} />}  
    </div>
  );
};

export default Home;
