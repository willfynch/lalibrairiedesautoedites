"use client";
import { NAVBAR_ITEMS, URLS_CONSTANTS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookBookmark } from "react-icons/fa6";
import { NavBarItemModel } from "@/types/models";

export const ACTIVE_CLASS = "border-primary border-[1px]";

function Navbar() {
  const path = usePathname();

  function isPathActive(item:NavBarItemModel): boolean {
    if(path==='/' && item.value === '') return true;
    if(path.split('/')[1] === item.value) return true;
    return false;
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow"
            >
              {NAVBAR_ITEMS.map((item: NavBarItemModel, index: number) => {
                return (
                  <li key={index}>
                    <a
                      className={isPathActive(item) ? ACTIVE_CLASS : ""}
                      href={`/${item.value}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link className="btn btn-ghost text-md flex" href="/">
            <FaBookBookmark />
            La librairie des auto-édité(e)s 🏴‍☠️
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NAVBAR_ITEMS.map((item: NavBarItemModel, index: number) => {
              return (
                <li key={index}>
                  <a
                    className={isPathActive(item) ? ACTIVE_CLASS : ""}
                    href={`/${item.value}`}
                  >
                   {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <div
            className="tooltip tooltip-primary tooltip-bottom before:text-neutral"
            data-tip="Ouvrir le formulaire"
          >
            <Link
              role="link"
              target="_blank"
              href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
              className="btn btn-primary text-neutral"
            >
              Soumettre mon livre
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
