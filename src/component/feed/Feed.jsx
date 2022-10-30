import { postData } from "../../utilities/data";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {postData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
