
/*
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
*/ /*
import React, { useEffect, useState } from "react";
import postsData from "../data/posts.json"; // JSON dosyasını import ettik

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API çağrısı yerine local JSON’dan okuma
    setPosts(postsData);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Local Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
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
*/
import React, { useEffect, useState } from "react";
import postsData from "../data/posts.json"; // local veri

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [useLocal, setUseLocal] = useState(true); // Local mi API mi?

  useEffect(() => {
    if (useLocal) {
      // Local JSON’dan veri al
      setPosts(postsData);
    } else {
      // API’den veri çek
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) throw new Error("API'den veri çekilemedi!");
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [useLocal]); // useLocal değişirse tekrar çalışır

  if (loading) return <h2 className="text-center mt-20">Loading...</h2>;
  if (error) return <h2 className="text-center mt-20 text-red-500">{error}</h2>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setUseLocal(true)}
          className={`px-4 py-2 mr-2 rounded ${
            useLocal ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Local Data
        </button>
        <button
          onClick={() => setUseLocal(false)}
          className={`px-4 py-2 rounded ${
            !useLocal ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          API Data
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {useLocal ? "Local Posts" : "API Posts"}
      </h1>

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
