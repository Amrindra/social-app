import Feed from "../../component/feed/Feed";
import LeftNavbar from "../../component/leftNavbar/LeftNavbar";
import RightNavbar from "../../component/rightNavbar/RightNavbar";
import TopNavbar from "../../component/topNavbar/TopNavbar";

const Profile = () => {
  return (
    <>
      <TopNavbar />

      <section className="homepage_container">
        <LeftNavbar />
        <Feed />
        <RightNavbar />
      </section>
    </>
  );
};

export default Profile;
