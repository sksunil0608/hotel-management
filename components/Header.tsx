import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <Link href="#">Home</Link>
      </div>
    </div>
  );
};

export default Header;
