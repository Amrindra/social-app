import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import "./styles.scss";

export default function App() {
  return (
    <div className="app">
      {/* <Profile /> */}
      {/* <RegisterForm /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/authentication" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
