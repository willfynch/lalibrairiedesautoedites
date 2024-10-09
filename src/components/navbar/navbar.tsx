"use client";
import { NavItemModel } from "@/models/models";
import { BOOK_TYPES, URLS_CONSTANTS } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FaBookBookmark } from "react-icons/fa6";

export const navItems: NavItemModel[] = [
  {
    label: "Romans",
    type: BOOK_TYPES.NOVEL,
  },
  {
    label: "Poésie",
    type: BOOK_TYPES.POETRY,
  },
  {
    label: "Essais",
    type: BOOK_TYPES.ESSAY,
  },
  {
    label: "Jeunesse",
    type: BOOK_TYPES.YOUTH,
  },
  {
    label: "Érotisme",
    type: BOOK_TYPES.EROTISM,
  },
];

export const ACTIVE_CLASS = "border-primary border-[1px]";

function Navbar() {
  const searchParams = useSearchParams();
  const query = searchParams.get("type");
  return (
    <Suspense>
      <header className="sticky top-0 z-50">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item: NavItemModel, index: number) => {
                  return (
                    <li key={index}>
                      <a
                        className={item.type === query ? ACTIVE_CLASS : ""}
                        href={`?type=${item.type}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link className="btn btn-ghost text-md flex" href={"/?type=novel"}>
              <FaBookBookmark />
              La librairie des auto-édité(e)s 🏴‍☠️
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item: NavItemModel, index: number) => {
                return (
                  <li key={index}>
                    <a
                      className={item.type === query ? ACTIVE_CLASS : ""}
                      href={`?type=${item.type}`}
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
              className="tooltip tooltip-primary tooltip-bottom"
              data-tip="Ouvrir le formulaire"
            >
              <a
                role="link"
                target="_blank"
                href={URLS_CONSTANTS.BOOK_SUBMISSION_FORM}
                className="btn btn-primary "
              >
                Soumettre mon livre
              </a>
            </div>
          </div>
        </div>
      </header>
    </Suspense>
  );
}

export default Navbar;
