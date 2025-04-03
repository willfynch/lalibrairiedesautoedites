import { BookCategory, BookCategoryTabItemModel } from "@/types";
import { ACTIVE_CLASS } from "@/utils/constants";

interface BookSearchMenuProps {
    scrollDirection: "down" | "up" | null;
    bookCategory: BookCategory;
    scrollY: number;
    tabItems: BookCategoryTabItemModel[];
    handleFilterBooks: (type?:BookCategory, searchedValue?:string) => void;
}
export const BookSearchMenu = (props:BookSearchMenuProps) => {
    return (
              <div
                className="px-4 flex flex-row justify-center gap-2 lg:block py-4 sticky top-[60px] lg:top-[70px] z-30 bg-base-100 shadow-md"
                style={{
                  transition: "linear .5s all",
                  transform:
                    props.scrollDirection === "down" && props.scrollY > 520
                      ? "translateY(-1000%)"
                      : "translateY(0)",
                }}
              >
                <div className="my-2 flex justify-center">
                  <ul
                    role="navigation"
                    className=" menu hidden lg:flex lg:menu-horizontal bg-base-200 rounded-box"
                  >
                    {props.tabItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            role="button"
                            className={item.type===props.bookCategory ? ACTIVE_CLASS : ""}
                            onClick={() => props.handleFilterBooks(item.type)}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
        
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className=" btn lg:hidden">
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
                      {props.tabItems.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              role="button"
                              className={item.type===props.bookCategory ? ACTIVE_CLASS : ""}
                              onClick={() => props.handleFilterBooks(item.type)}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
        
                <div className="flex-grow lg:px-10 my-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      onChange={(e) => props.handleFilterBooks(props.bookCategory, e.target.value.toString().toLowerCase())}
                      type="text"
                      className="grow"
                      placeholder="Chercher un livre par titre, auteurice, thématique..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
    )
}