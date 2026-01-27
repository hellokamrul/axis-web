import React from "react";
//  border-2 border-red-400
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between w-1/2  ">
          <li>Home</li>
          <li>Services</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
