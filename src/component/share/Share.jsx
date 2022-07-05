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
            placeholder="What's on your mind?"
            className="share_input"
          />
        </div>
      
      </div>
    </div>
  );
};

export default Share;
