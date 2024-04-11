import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div>Logo</div>
      <div className="text-white">
        <Link
          href={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        <Link
          href={{
            pathname: "/hotels",
          }}
        >
          Blog Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
