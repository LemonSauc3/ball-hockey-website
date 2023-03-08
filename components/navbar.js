import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [title, setTitle] = useState("Home");

  return (
    <div className="bg-gray-600 border-2 m-1 rounded-md sm:h-12">
      {
        // Mobile menu
      }
      <div className="flex flex-row justify-between md:hidden p-2">
        <Link className="text-3xl text-white" href="/">
          Tri-City
        </Link>
        <h1 className="text-3xl text-white text-center outline-none">
          {title}
        </h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNavOpen(!navOpen);
            const menu = document.querySelector(".mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-10 h-10 text-white"
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
      </div>
      <div className="hidden mobile-menu">
        <ul className="flex flex-col space-y-2">
          {routes.map((route) => (
            <button
              className="text-lg text-white outline-none"
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
      {
        // Desktop menu
      }
      <div className="hidden md:flex flex-row justify-center">
        <div>
          <h1 className="text-3xl text-white pr-6">Tri-City</h1>
        </div>
        <div>
          <ul className="flex content-center justify-center space-x-10">
            {routes.map((route) => (
              <li className="text-3xl text-white" key={route.name}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
    name: "Contact",
    path: "/about",
  },
];
export default Navbar;
