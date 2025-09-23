 /* import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";

// Navbar
function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow">
      <Link to="/" className="text-blue-600 font-semibold hover:underline">Ana Sayfa</Link>
      <Link to="/hakkimizda" className="text-blue-600 font-semibold hover:underline">Hakkımızda</Link>
      <Link to="/iletisim" className="text-blue-600 font-semibold hover:underline">İletişim</Link>
    </nav>
  );
}

// tanımlı sayfalar
function Home() {
  return <h1 className="text-3xl font-bold text-center mt-20">Ana Sayfa</h1>;
}

function Hakkimizda() {
  return <h1 className="text-3xl font-bold text-center mt-20">Hakkımızda Sayfası</h1>;
}

function Iletisim() {
  return <h1 className="text-3xl font-bold text-center mt-20">İletişim Sayfası</h1>;
}

// Dinamik slug sayfası
const pages = {
  hakkimizda: "Hakkımızda Sayfası",
  iletisim: "İletişim Sayfası"
};

function DynamicPage() {
  const { slug } = useParams();
  const content = pages[slug] || `Dinamik Sayfa: ${slug}`;
  return <h1 className="text-3xl font-bold text-center mt-20">{content}</h1>;
}

// App component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/:slug" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";

// Sayfaları pages klasöründen import ettik
import Home from "./pages/Home";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";

// Navbar
function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow">
      <Link to="/" className="text-blue-600 font-semibold hover:underline">Ana Sayfa</Link>
      <Link to="/hakkimizda" className="text-blue-600 font-semibold hover:underline">Hakkımızda</Link>
      <Link to="/iletisim" className="text-blue-600 font-semibold hover:underline">İletişim</Link>
    </nav>
  );
}

// Dinamik slug sayfası
const pages = {
  hakkimizda: "Hakkımızda Sayfası",
  iletisim: "İletişim Sayfası"
};

function DynamicPage() {
  const { slug } = useParams();
  const content = pages[slug] || `Dinamik Sayfa: ${slug}`;
  return <h1 className="text-3xl font-bold text-center mt-20">{content}</h1>;
}

// App component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/:slug" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
