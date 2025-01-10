import { Route, Routes, Navigate, Link, replace } from "react-router-dom";
import Home from "../pages/home/Index";
import PostsPage from "../pages/post/Index";
import Detail from "../pages/post/Detail";
import New from "../pages/post/New";
import Edit from "../pages/post/Edit";
import ProfilePage from "../pages/profile/ProfilePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Header from "./Header";
import Footer from "./Footer";


interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<Detail />} />
              <Route path="/posts/new" element={<New />} />
              <Route path="/posts/edit/:id" element={<Edit />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </main>

      <Footer />
    </>
  );
}
