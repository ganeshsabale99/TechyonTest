import React from "react";
import "./Header.scss";
import { ReactComponent as SearchNormalIcon } from "../../assets/svg/searchNormal.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/setting.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg";
import { ReactComponent as ImageIcon } from "../../assets/svg/image.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/arrowDown.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="subHeader">
        <MenuIcon className="iconTop" />
        <div className="logo">TECHYON</div>
      </div>

      
      <div className="right-side">
        
        <SearchNormalIcon className="icon" />
        <SettingsIcon className="icon" />
        <NotificationIcon className="Notiicon" />
        <ImageIcon className="icon" />
        <ArrowDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
