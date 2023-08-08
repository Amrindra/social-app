import {
  Brightness4,
  Chat,
  Notifications,
  Person,
  Search,
  WbSunny
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./TopNavbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../reduxGlobalState/slices/darkModeSlice";

const TopNavbar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="topNavbar">
      <div className="topNavbar_wrapper">
        <div className="topNavbar_left">
          <Link to="/">
            <span className="logo">DevFam</span>
          </Link>
        </div>

        <div className="topNavbar_center">
          <div className="topNavbar_search">
            <input
              placeholder="Search.."
              type="search"
              className="search_input"
            />
            <Search className="search_icon" />
          </div>
        </div>

        <div className="topNavbar_right">
          <div className="topNavbar_right_icons">
            <div
              className="topNavbar_right_icon_item"
              onClick={handleDarkModeToggle}
            >
              {isDarkMode ? (
                <WbSunny style={{ color: "yellow" }} />
              ) : (
                <Brightness4 />
              )}
            </div>
            <div className="topNavbar_right_icon_item">
              <Person />
              <span className="topNavbar_right_icon_badge">1</span>
            </div>
            <div className="topNavbar_right_icon_item">
              <Chat />
              <span className="topNavbar_right_icon_badge">5</span>
            </div>
            <div className="topNavbar_right_icon_item">
              <Notifications />
              <span className="topNavbar_right_icon_badge">10</span>
            </div>
          </div>

          {/* <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="topNavbar_img"
          /> */}
          <div className="login">
            <Link to="/authentication">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
