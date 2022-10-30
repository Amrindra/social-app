import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./Post.scss";

const Post = ({ post }) => {
  const [likeIcon, setLikeIcon] = useState(false);

  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
