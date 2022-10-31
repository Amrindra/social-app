import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { userData } from "../../utilities/data";
import "./Post.scss";

const Post = ({ post }) => {
  const [likeIcon, setLikeIcon] = useState(false);

  const profileImage = userData.filter(
    (profile) => profile.id === post?.userId
  )[0].profilePicture;

  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img
              src={profileImage}
              alt="profile_picture"
              className="post_profile_img"
            />
            <span className="post_user_name">
              {userData.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="post_date">{post.timestamp}</span>
          </div>
          <div className="post_top_right">
            <MoreVert />
          </div>
        </div>

        <div className="post_center">
          <span className="post_text">{post?.caption}</span>
          <img src={post.photo} alt="" className="post_img" />
        </div>

        <div className="post_bottom">
          <div className="post_bottom_left">
            {likeIcon ? (
              <ThumbUpAlt />
            ) : (
              <ThumbUpAltOutlined className="like_icon" />
            )}
            {likeIcon ? <Favorite /> : <FavoriteBorder className="like_icon" />}
            <span className="post_like_counter">{post.like}</span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment_text">{post.comment} comments</span>
            <span className="post_share">10 shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
