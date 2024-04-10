import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { getData } from "./config/firebase";
import { ArrowLeft } from "lucide-react";

export default function SingleCard() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getData();
      const foundBlog = data.find((blog) => blog.slug === slug);
      setBlog(foundBlog);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 my-6">
      <Link to={"/"}>
        <ArrowLeft size={30} className="mb-4 " />
      </Link>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start">
        <div className="w-full lg:w-[600px] h-[300px] mb-10 lg:mb-0">
          <img
            className="w-full h-full border-b rounded-md object-cover"
            src={blog.image}
            alt=""
          />
        </div>
        <div className="w-full lg:ml-12">
          <h1 className="text-1-5xl lg:text-4xl font-bold mb-3 text-center lg:text-left">
            {blog.title}
          </h1>
          <div className="text-md font-600 dark:text-gray-300 text-gray-800 lg:text-xl">
            <p className="mb-4">{blog.description}</p>
            <img src={blog.image2} alt="" className="w-full h-full border-b rounded-md object-cover"/>
          </div>
        </div>
      </div>
    </main>
  );
}
