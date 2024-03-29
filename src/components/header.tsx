import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="bg-white">
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-10 items-center">
            <img
              src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/07/FindIt_Logo_Philly.jpg"
              width="200"
              height="200"
            ></img>
            <div className="flex padding-4 gap-x-10 text-lg font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">
            <div className=" h-12 pt-4 ">
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
