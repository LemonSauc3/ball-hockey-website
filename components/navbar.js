import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [title, setTitle] = useState("Home");

  return (
    <>
      {
        // Mobile menu
      }
      <div className="flex flex-row md:hidden">
        <button
          onClick={(e) => {
            e.preventDefault();
            setNavOpen(!navOpen);
            const menu = document.querySelector(".mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-10 h-10 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden mobile-menu">
          <ul className="flex flex-col space-y-2">
            {routes.map((route) => (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTitle(route.name);
                  setNavOpen(!navOpen);
                  const menu = document.querySelector(".mobile-menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <li
                  className="text-lg flex justify-center content-center"
                  key={route.name}
                >
                  <Link href={route.path}>{route.name}</Link>
                </li>
              </button>
            ))}
          </ul>
        </div>
        <h1 className="text-3xl text-center">{title}</h1>
      </div>
      {
        // Desktop menu
      }
      <div className="hidden md:flex flex-row items-center justify-between border-2 bg-gray-300 m-1 rounded-md">
        <div></div>
        <div>
          <ul className="flex content-center justify-center space-x-10">
            {routes.map((route) => (
              <li className="text-3xl" key={route.name}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// Routes array
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Teams",
    path: "/teams",
  },
  {
    name: "Standings",
    path: "/standings",
  },
  {
    name: "Suspensions",
    path: "/suspensions",
  },
  {
    name: "Contact Us",
    path: "/about",
  },
];
export default Navbar;
