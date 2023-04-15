import "./ButtonStyle.scss";

const Button = ({ children }) => {
  return (
    <div className="button_wrapper">
      <button className="button">{children}</button>
    </div>
  );
};

export default Button;
