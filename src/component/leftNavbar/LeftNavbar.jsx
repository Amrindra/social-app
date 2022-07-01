import "./LeftNavbar.scss";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School
} from "@material-ui/icons";

const LeftNavbar = () => {
  return (
    <div className="leftNavbar">
      <div className="leftNavbar_wrapper">
        <ul className="leftNavbar_lists">
          <li className="leftNavbar_list_item">
            <RssFeed className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Feed</span>
          </li>
          <li className="leftNavbar_list_item">
            <Chat className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Chats</span>
          </li>
          <li className="leftNavbar_list_item">
            <PlayCircleFilledOutlined className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Videos</span>
          </li>
          <li className="leftNavbar_list_item">
            <Group className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Groups</span>
          </li>
          <li className="leftNavbar_list_item">
            <Bookmark className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Bookmarks</span>
          </li>
          <li className="leftNavbar_list_item">
            <HelpOutline className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Questions</span>
          </li>
          <li className="leftNavbar_list_item">
            <WorkOutline className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Jobs</span>
          </li>
          <li className="leftNavbar_list_item">
            <Event className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Events</span>
          </li>
          <li className="leftNavbar_list_item">
            <School className="leftNavbar_icon" />
            <span className="leftNavbar_item_text">Courses</span>
          </li>
        </ul>

        <button className="leftNavbar_btn">Show more</button>
        <hr />
        <ul className="leftNavbar_friend_lists">
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
          <li className="leftNavbar_friend">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/10.jpeg?raw=true"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
