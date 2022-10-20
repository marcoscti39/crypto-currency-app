import React from "react";

const Footer = () => {
  return (
    <footer className="flex  align-center justify-center py-8 bg-darkGreen text-white mt-auto">
      <div className="flex flex-col gap-1 lg:ml-sideBarWidth">
        <span>
          Copyright @ 2022{" "}
          <span className="text-lightGreen">CryptoVerse.Inc</span>
        </span>
        <span>All rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
