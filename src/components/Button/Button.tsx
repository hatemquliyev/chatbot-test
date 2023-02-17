import "./button.scss";
import { useRecoilState } from "recoil";
import { themeAtom } from "../../App";
const Button = () => {
  const [theme] = useRecoilState(themeAtom);
  return (
    <div>
      <button
        className={`btn d-flex align-items-center justify-content-center ${
          theme === "dark_theme" ? "btn-success" : "btn-primary"
        }`}
      >
        Test button
      </button>
    </div>
  );
};
export default Button;
