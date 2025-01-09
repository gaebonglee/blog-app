import { Route, Routes, Navigate, Link, replace } from "react-router-dom";
import Home from "../pages/home/Index";
import PostList from "../pages/post/List";
import PostDetail from "../pages/post/Detail";
import PostNew from "../pages/post/New";
import PostEdit from "../pages/post/Edit";
import ProfilePage from "../pages/profile/ProfilePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signin/SignUp";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
