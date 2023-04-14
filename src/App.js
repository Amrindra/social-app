import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Homepage from "./pages/homepage/Homepage";
import RegisterForm from "./pages/register/Register";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      {/* <Profile /> */}
      {/* <RegisterForm /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
