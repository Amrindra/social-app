import Feed from "../../components/feed/Feed";
import LeftNavbar from "../../components/leftNavbar/LeftNavbar";
import RightNavbar from "../../components/rightNavbar/RightNavbar";
import TopNavbar from "../../components/topNavbar/TopNavbar";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <TopNavbar />

      <div className="profile_container">
        <LeftNavbar />

        <div className="profile_right">
          <div className="profile_right_top">
            <div className="profile_cover">
              <img
                className="profile_coverImg"
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <img
                className="profile_userImg"
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60g"
                alt=""
              />
            </div>

            <div className="profile_info">
              <h4 className="profile_info_name">Amrin</h4>
              <span className="profile_bio">What's up fam!</span>
            </div>
          </div>

          <div className="profile_right_bottom">
            <Feed />
            <RightNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
