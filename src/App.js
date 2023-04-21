import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Footer, Header } from "./components";
import { BlogPage, Blogs, CourseDetails, Error, Events, Home } from "./pages";
import AdminPanel from "./pages/AdminPanel";
import Signin from "./pages/signin/Signin";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        {window.location.pathname.match('/signin')?.length > 0 ? null : <Header />}
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/admin" element={<AdminPanel />} ></Route>
          <Route path="/events" element={<Events />} ></Route>
          <Route path="/event/:id" element={<CourseDetails />} ></Route>
          <Route path="/blogs" element={<Blogs />} ></Route>
          <Route path="/blog/:id" element={<BlogPage />} ></Route>
          <Route path="/*" element={<Error />} ></Route>
        </Routes>
        {window.location.pathname.match('/signin')?.length > 0 ? null : <Footer />}
      </Router>
    </>
  );
}

export default React.memo(App);
