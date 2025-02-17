import React from "react";
import { useHistory } from "react-router-dom";
import style from "./style.module.css";

import VisitInfo from "../VisitInfo/";
import { ReactComponent as Logo } from "../../imgs/logo.svg";
import { SmallButton } from "../Button/";
import { useUserState } from "../../contexts/User";

const Header = function () {
  const history = useHistory();
  const { logoutUser } = useUserState();

  const handleLogout = () => {
    logoutUser();
    history.replace("/login");
  };

  return (
    <div className={style.header}>
      <div className={style.firstWrapper}>
        <VisitInfo colored />
      </div>
      <Logo className={style.logo} />
      <SmallButton text="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Header;
