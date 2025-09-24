import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PostsPage from "./pages/postsPage";


// Navbar
function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow">
      <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 font-semibold hover:underline">About</Link>
      <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact</Link>
      <Link to="/posts" className="text-blue-600 font-semibold hover:underline">Posts</Link>

    </nav>
  );
}

// Dynamic slug page
const pages = {
  about: "About Page",
  contact: "Contact Page"
};

function DynamicPage() {
  const { slug } = useParams();
  const content = pages[slug] || `Dynamic Page: ${slug}`;
  return <h1 className="text-3xl font-bold text-center mt-20">{content}</h1>;
}

// App component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:slug" element={<DynamicPage />} />
        <Route path="/posts" element={<PostsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
