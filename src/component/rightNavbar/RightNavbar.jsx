import { userData } from "../../utilities/data";
import "./RightNavbar.scss";

const RightNavbar = () => {
  return (
    <div className="rightNavbar">
      <div className="rightNavbar_wrapper">
        <div className="devFam_news_container">
          <h3>DevFam News</h3>
          <ul>
            <li>React 18 just released</li>
            <li>Best tools to use for Frontend</li>
            <li>Node.js has become so popular</li>
          </ul>
        </div>
      </div>

      <div className="rightBar_online_wrapper">
        <h4 className="online_friend_title">Online</h4>
        {userData.map((user) => (
          <ul className="online_friend_list">
            <li className="online_friend">
              <div className="online_friend_profile_img">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="profile_img"
                />
                <span className="online_green_dot"></span>
              </div>
              <div className="online_friend_name">John Doe</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RightNavbar;
