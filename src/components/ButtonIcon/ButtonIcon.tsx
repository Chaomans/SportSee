import { NavLink } from "react-router-dom";
import styles from "./buttonicon.module.scss";

type ButtonIconProps = {
  name: string;
  icon: string;
};

const ButtonIcon = ({ name, icon }: ButtonIconProps) => {
  return (
    <NavLink className={styles.buttonIcons} to=".">
      <img src={`../assets/${icon}`} alt={`icon of ${name}`} />
    </NavLink>
  );
};

export default ButtonIcon;
