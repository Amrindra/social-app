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

export const listItems = [
  {
    icon: <RssFeed className="leftNavbar_icon" />,
    listName: "Feed",
    link: "/"
  },
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
  { icon: <WorkOutline className="leftNavbar_icon" />, listName: "Careers" },
  { icon: <Event className="leftNavbar_icon" />, listName: "Events" },
  { icon: <School className="leftNavbar_icon" />, listName: "Education" }
];
