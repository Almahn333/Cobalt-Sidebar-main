import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpandState] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    {
      path: "/",
      text: "Dashboard",
      icon: activeMenuItem === "Dashboard" ? "icons/dashboard1.svg" : "icons/Dashboard.svg",
    },
    {
      path: "/",
      text: "Tests",
      icon: activeMenuItem === "Tests" ? "icons/tests1.svg" : "icons/Tests.svg",
    },
    {
      path: "/",
      text: "Courses",
      icon: activeMenuItem === "Courses" ? "icons/courses1.svg" : "icons/Cources.svg",
    },
  ];

  const handleMenuItemClick = (text) => {
    setActiveMenuItem(text);
  };

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <h2>Menu</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              key={text}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
              onClick={() => handleMenuItemClick(text)}
            >
              <img className="menu-item-icon" src={icon} alt="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/user.webp"
              alt=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Bluberri.</p>
              <p className="nav-footer-user-position">uxberri@gmail.com</p>
            </div>
          </div>
        )}
        <img className="sun-icon" src="icons/sun.svg" alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;
