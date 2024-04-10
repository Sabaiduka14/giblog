import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { getData } from "./config/firebase";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";


export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <main className="w-full h-screen px-4 mt-5 md:mt-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex justify-center">
            <Card style={{ height: "100%" }}>
              <CardHeader>
                <img
                  className="rounded-md max-w-[full] object-cover h-[250px]"
                  src={blog.image}
                  alt=""
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="font-bold mb-2 text-3xl">
                  {blog.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {blog.smDescription}
                </CardDescription>
                <Link to={`/${blog.slug}`}>
                  <Button className="font-semibold md:mt-10 mt-6 w-full">View Blog</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

