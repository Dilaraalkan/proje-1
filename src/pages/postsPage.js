import React, { useEffect, useState } from "react";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-20 text-xl">Loading...</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
