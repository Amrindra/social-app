import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import LeftNavbar from "../../components/leftNavbar/LeftNavbar";
import RightNavbar from "../../components/rightNavbar/RightNavbar";
import TopNavbar from "../../components/topNavbar/TopNavbar";
import { userData } from "../../utilities/data";
import "./Profile.scss";
// import axios from "axios";

const Profile = () => {
  const params = useParams();
  const { userId } = params;

  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Fetch user data using the userId
  //   axios
  //     .get(`https://ubbbj4.csb.app/profile/${userId}`)
  //     .then((response) => {
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // }, [userId]);
  const profileData = {
    coverImage: userData[userId - 1].coverImage,
    profileImage: userData[userId - 1].profilePicture,
    username: userData[userId - 1].username,
    bio: userData[userId - 1].bio
  };

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
                src={profileData.coverImage}
                alt=""
              />
              <img
                className="profile_userImg"
                src={profileData.profileImage}
                alt=""
              />
            </div>

            <div className="profile_info">
              <h4 className="profile_info_name">{profileData.username}</h4>
              <span className="profile_bio">{profileData.bio}</span>
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
