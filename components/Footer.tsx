import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 py-20 bg-gradient-to-r from-gray-400 to-zinc-600">
      <div className="text-white text-center mb-2">
        <h2 className="text-white">@CopyRight: Sunil Kumar</h2>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sk-sunil">
          <p className="text-white">LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
