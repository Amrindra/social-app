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

      <div className="scrolltest">
        <div className="rightBar_online_wrapper">
          <h4 className="online_friend_title">Online</h4>
          {userData.map((user) => (
            <ul className="online_friend_list">
              <li className="online_friend" key={user.id}>
                <div className="online_friend_profile_img">
                  <img
                    src={user.profilePicture}
                    alt=""
                    className="profile_img"
                  />
                  <span className="online_green_dot"></span>
                </div>
                <div className="online_friend_name">{user.username}</div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
