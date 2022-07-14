import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./TopNavbar.scss";

const TopNavbar = () => {
  return (
    <div className="topNavbar_wrapper">
      <div className="topNavbar_left">
        <span className="logo">DevFam</span>
      </div>

      <div className="topNavbar_center">
        <div className="topNavbar_search">
          <input className="search_input" placeholder="Search.." />
          <Search className="search_icon" />
        </div>
      </div>

      <div className="topNavbar_right">
        <div className="topNavbar_right_links">
          <span className="topNavbar_right_link">Homepage</span>
          <span className="topNavbar_right_link">Timeline</span>
        </div>

        <div className="topNavbar_right_icons">
          <div className="topNavbar_right_icon_item">
            <Person />
            <span className="topNavbar_right_icon_badge">1</span>
          </div>
          <div className="topNavbar_right_icon_item">
            <Chat />
            <span className="topNavbar_right_icon_badge">1</span>
          </div>
          <div className="topNavbar_right_icon_item">
            <Notifications />
            <span className="topNavbar_right_icon_badge">1</span>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="topNavbar_img"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
