import PermMedia from "@mui/icons-material/PermMedia";
import { useSelector } from "react-redux";
import "./Share.scss";

const Share = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="share_container">
      <div className="share_wrapper">
        <div className="share_top">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="share profile"
            className="share_profile_img"
          />
          <input
            type="text"
            placeholder="Start a post"
            className="share_input"
            style={{ color: isDarkMode && "white" }}
          />
        </div>

        <hr className="share_hr" />

        <div className="share_bottom">
          <div className="share_options">
            <div className="share_option_item">
              <PermMedia
                // htmlColor={isDarkMode ? "white" : undefined}
                className="share_icon"
              />
              <span className="share_option_text">Photo or Video</span>
            </div>
            {/* <div className="share_option_item">
              <Label htmlColor="blue" className="share_icon" />
              <span className="share_option_text">Tag</span>
            </div>
            <div className="share_option_item">
              <Room htmlColor="orange" className="share_icon" />
              <span className="share_option_text">Location </span>
            </div> */}
          </div>
          <div className="share_button">
            <button
              style={{
                color: isDarkMode ? "white" : "black",
                border: isDarkMode ? "" : "2px solid black",
              }}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
