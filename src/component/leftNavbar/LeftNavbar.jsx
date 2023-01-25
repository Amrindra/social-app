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

const listItems = [
  { icon: <RssFeed className="leftNavbar_icon" />, listName: "Feed" },
  { icon: <Chat className="leftNavbar_icon" />, listName: "Chats" },
  {
    icon: <PlayCircleFilledOutlined className="leftNavbar_icon" />,
    listName: "Video"
  },
  { icon: <Group className="leftNavbar_icon" />, listName: "Groups" },
  { icon: <Bookmark className="leftNavbar_icon" />, listName: "Bookmarks" },
  {
    icon: <HelpOutline className="leftNavbar_icon" />,
    listName: "Questions"
  },
  { icon: <WorkOutline className="leftNavbar_icon" />, listName: "Jobs" },
  { icon: <Event className="leftNavbar_icon" />, listName: "Events" },
  { icon: <School className="leftNavbar_icon" />, listName: "Courses" }
];

const LeftNavbar = () => {
  return (
    <div className="leftNavbar">
      <div className="leftNavbar_wrapper">
        <ul className="leftNavbar_lists">
          {listItems.map((item) => (
            <li className="leftNavbar_list_item" key={item.listName}>
              {item.icon}
              <span className="leftNavbar_item_text">{item.listName}</span>
            </li>
          ))}
        </ul>

        <button className="leftNavbar_btn">Show more</button>
        <hr />
        <ul className="leftNavbar_friend_lists">
          <li className="leftNavbar_friend">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
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
