import RssFeed from "@mui/icons-material/RssFeed";
import Chat from "@mui/icons-material/Chat";
import PlayCircleFilledOutlined from "@mui/icons-material/PlayCircleFilledOutlined";
import Group from "@mui/icons-material/Group";
import Bookmark from "@mui/icons-material/Bookmark";
import Event from "@mui/icons-material/Event";
import HelpOutline from "@mui/icons-material/HelpOutline";
import WorkOutline from "@mui/icons-material/WorkOutline";
import School from "@mui/icons-material/School";

export const listItems = [
  {
    icon: <RssFeed className="leftNavbar_icon" />,
    listName: "Feed",
    link: "/",
  },
  { icon: <Chat className="leftNavbar_icon" />, listName: "Chats" },
  {
    icon: <PlayCircleFilledOutlined className="leftNavbar_icon" />,
    listName: "Video",
  },
  { icon: <Group className="leftNavbar_icon" />, listName: "Groups" },
  { icon: <Bookmark className="leftNavbar_icon" />, listName: "Bookmarks" },
  {
    icon: <HelpOutline className="leftNavbar_icon" />,
    listName: "Questions",
  },
  { icon: <WorkOutline className="leftNavbar_icon" />, listName: "Careers" },
  { icon: <Event className="leftNavbar_icon" />, listName: "Events" },
  { icon: <School className="leftNavbar_icon" />, listName: "Education" },
];
