import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import "./index.scss";
import { useSelector } from "react-redux";

export default function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className="app"
      style={{
        backgroundColor: isDarkMode && "#212121",
        color: isDarkMode && "white"
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/authentication" element={<Login />} />
      </Routes>
    </div>
  );
}
