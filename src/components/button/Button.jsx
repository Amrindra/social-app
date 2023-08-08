import { useSelector } from "react-redux";
import "./ButtonStyle.scss";

const Button = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="button_wrapper">
      <button className="button">{children}</button>
    </div>
  );
};

export default Button;
