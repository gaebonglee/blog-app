import { Route, Routes, Navigate, Link, replace } from "react-router-dom";
import Home from "../pages/home/Index";
import PostsPage from "../pages/post/Index";
import Detail from "../pages/post/Detail";
import New from "../pages/post/New";
import Edit from "../pages/post/Edit";
import ProfilePage from "../pages/profile/ProfilePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signin/SignUp";
import Header from "./Header";
import Footer from "./Footer";

export default function Router() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/posts/new" element={<New />} />
          <Route path="/posts/edit/:id" element={<Edit />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
}
