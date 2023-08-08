import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import "./index.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // this ScrollToTop function is used to handle the page position when we switch to the new page it will remain on the top
  function ScrollToTop(props) {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor: isDarkMode && "#212121",
        color: isDarkMode && "white"
      }}
    >
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/authentication" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}
