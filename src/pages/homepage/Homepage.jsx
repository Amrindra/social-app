import Feed from "../../components/feed/Feed";
import LeftNavbar from "../../components/leftNavbar/LeftNavbar";
import RightNavbar from "../../components/rightNavbar/RightNavbar";
import TopNavbar from "../../components/topNavbar/TopNavbar";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopNavbar />

      <section className="homepage_container">
        <LeftNavbar />
        <Feed />
        <RightNavbar />
      </section>
    </div>
  );
};

export default Homepage;
