import { Link } from "react-router-dom";
import { listItems } from "../../utilities/leftNavbarData";
import "./LeftNavbar.scss";

const LeftNavbar = () => {
  return (
    <div className="leftNavbar">
      <div className="leftNavbar_wrapper">
        <ul className="leftNavbar_lists">
          {listItems.map((item) => (
            <Link to={item.link} key={item.listName}>
              <li className="leftNavbar_list_item">
                {item.icon}
                <span className="leftNavbar_item_text">{item.listName}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* <button className="leftNavbar_btn">Show more</button> */}

        <hr />
        <ul className="leftNavbar_friend_lists">
          <li className="leftNavbar_friend">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="leftNavbar_friend_img"
            />
            <span className="leftNavbar_friend_name">Lorem ipsum</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
