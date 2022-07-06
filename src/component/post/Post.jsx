import { MoreVert } from "@material-ui/icons";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
              alt="profile_picture"
              className="post_profile_img"
            />
            <span className="post_user_name">King Dev</span>
            <span className="post_date">10 mins ago</span>
          </div>

          <div className="post_top_right">
            <MoreVert />
          </div>
        </div>

        <div className="post_center"></div>

        <div className="post_bottom"></div>
      </div>
    </div>
  );
};

export default Post;
