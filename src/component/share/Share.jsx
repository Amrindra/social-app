import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import "./Share.scss";

const Share = () => {
  return (
    <div className="share_container">
      <div className="share_wrapper">
        <div className="share_top">
          <img
            src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
            alt="share profile"
            className="share_profile_img"
          />
          <input
            type="text"
            placeholder="Start a post"
            className="share_input"
          />
        </div>

        <hr className="share_hr" />

        <div className="share_bottom">
          <div className="share_options">
            <div className="share_option_item">
              <PermMedia htmlColor="lightblue" className="share_icon" />
              <span className="share_option_text">Photo or Video</span>
            </div>
            <div className="share_option_item">
              <Label htmlColor="blue" className="share_icon" />
              <span className="share_option_text">Tag</span>
            </div>
            <div className="share_option_item">
              <Room htmlColor="orange" className="share_icon" />
              <span className="share_option_text">Location </span>
            </div>
            <div className="share_option_item">
              <EmojiEmotions htmlColor="tomato" className="share_icon" />
              <span className="share_option_text">Feelings</span>
            </div>
          </div>
          <button className="share_button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
