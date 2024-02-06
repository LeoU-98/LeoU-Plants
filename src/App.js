import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Home from "./components/Home.js";
import Store from "./components/Store.js";
import Login from "./components/Login.js";
// import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App container  ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Business-Management" element={<Home />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Gallery" element={<Gallery />}></Route>
          <Route path="Store" element={<Store />}></Route>
          <Route path="Login" element={<Login />}></Route>
          {/* <Route path="*" element={<PageNotFound />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
