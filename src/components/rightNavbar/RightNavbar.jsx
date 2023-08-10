import { userData } from "../../utilities/data";
import "./RightNavbar.scss";

const RightNavbar = () => {
  return (
    <div className="rightNavbar_container">
      <div className="rightNavbar_news">
        {/* News Section */}
        <h3>DevFam News</h3>
        <ul>
          <li>React 18 just released</li>
          <li>Best tools to use for Frontend</li>
          <li>Node.js has become so popular</li>
        </ul>
      </div>

      {/* Online Friends section */}
      <div className="rightBar_online">
        <h4 className="online_friend_title">Online Fams</h4>
        <ul className="online_friend_list">
          {userData.map((user) => (
            <li className="online_friend" key={user.id}>
              <div className="online_friend_profile_img">
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="profile_img"
                />
                <span className="online_green_dot"></span>
              </div>
              <div className="online_friend_name">{user.username}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightNavbar;
