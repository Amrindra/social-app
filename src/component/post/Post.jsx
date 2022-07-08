import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  ThumbUpAlt,
  ThumbUpAltOutlined
} from "@material-ui/icons";
import { useState } from "react";
import "./Post.scss";

const Post = () => {
  const [likeIcon, setLikeIcon] = useState(false);

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

        <div className="post_center">
          <span className="post_text">Testing my post :D</span>
          <img
            src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/post/1.jpeg?raw=true"
            alt=""
            className="post_img"
          />
        </div>

        <div className="post_bottom">
          <div className="post_bottom_left">
            {likeIcon ? (
              <ThumbUpAlt />
            ) : (
              <ThumbUpAltOutlined className="like_icon" />
            )}
            {likeIcon ? <Favorite /> : <FavoriteBorder className="like_icon" />}
            <span className="post_like_counter">100</span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment_text">10 comments</span>
            <span className="post_share">10 shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
