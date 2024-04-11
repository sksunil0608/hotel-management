import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <div>Logo</div>
      <div className="text-white">
        <Link href="/" className="ml-2">
          Home
        </Link>
        <Link href="/hotels" className="ml-2">
          Hotels
        </Link>
      </div>
    </div>
  );
};

export default Header;
