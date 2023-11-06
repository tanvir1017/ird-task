"use client";
import { Button } from "@/shadcn/ui/button";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="bg-white">
      <nav className="py-3 pl-[26px] pr-[15px] flex items-center justify-between">
        <div>
          <Image
            src="/assets/images/brand-logo.png"
            alt="brand logo"
            width={71.6}
            height={36}
          />
        </div>

        <form>
          <div className="relative">
            <input
              placeholder="search best food"
              type="text"
              className="ring ring-[#e8eaecc9] dark:bg-white px-2 py-1.5 rounded-md focus:outline-none w-[390px]"
            />
            <button className="bg-[#e655271a] p-2 rounded-md absolute inset-y-0 right-1">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <path
                    id="name"
                    d="M19.5 18L15.8333 14.3333M17.3889 10.4444C17.3889 11.1594 17.2481 11.8674 16.9745 12.5279C16.7008 13.1885 16.2998 13.7887 15.7942 14.2942C15.2887 14.7998 14.6885 15.2008 14.0279 15.4745C13.3674 15.7481 12.6594 15.8889 11.9444 15.8889C11.2295 15.8889 10.5215 15.7481 9.86095 15.4745C9.2004 15.2008 8.6002 14.7998 8.09464 14.2942C7.58908 13.7887 7.18804 13.1885 6.91443 12.5279C6.64082 11.8674 6.5 11.1594 6.5 10.4444C6.5 9.00049 7.07361 7.61567 8.09464 6.59464C9.11567 5.57361 10.5005 5 11.9444 5C13.3884 5 14.7732 5.57361 15.7942 6.59464C16.8153 7.61567 17.3889 9.00049 17.3889 10.4444Z"
                    stroke="#E65527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </form>

        <div className="space-x-3 flex items-center ">
          {theme === "dark" ? (
            <Button
              onClick={() => setTheme("light")}
              className="bg-[#e655271a] hover:bg-[#e655271a] ring-offset-1 ring-[#e654271f] ring"
            >
              <Moon className="text-[#E65527]" strokeWidth={1} />
            </Button>
          ) : (
            <Button
              onClick={() => setTheme("dark")}
              className="bg-[#e655271a] hover:bg-[#e655271a] ring-offset-1 ring-[#e654271f] ring p-3.5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="sun-01">
                  <path
                    id="name"
                    d="M14.1673 10.0007C14.1673 12.3018 12.3018 14.1673 10.0007 14.1673C7.69947 14.1673 5.83398 12.3018 5.83398 10.0007C5.83398 7.69947 7.69947 5.83398 10.0007 5.83398C12.3018 5.83398 14.1673 7.69947 14.1673 10.0007Z"
                    fill="#E65527"
                    stroke="#E65527"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                  <path
                    id="name_2"
                    d="M9.99625 2.5H10.0038M9.99675 17.5H10.0043M15.299 4.69666H15.3065M4.69507 15.3033H4.70256M4.69507 4.69706H4.70256M15.2985 15.3037H15.306M17.4925 10.0005H17.5M2.5 10.0005H2.50748"
                    stroke="#E65527"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Button>
          )}
          <Button
            onClick={() => setTheme("light")}
            className="bg-[#e655271a] hover:bg-[#e655271a] ring-offset-1 ring-[#e654271f] ring p-3.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="sun-01">
                <path
                  id="name"
                  d="M14.1673 10.0007C14.1673 12.3018 12.3018 14.1673 10.0007 14.1673C7.69947 14.1673 5.83398 12.3018 5.83398 10.0007C5.83398 7.69947 7.69947 5.83398 10.0007 5.83398C12.3018 5.83398 14.1673 7.69947 14.1673 10.0007Z"
                  fill="#E65527"
                  stroke="#E65527"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path
                  id="name_2"
                  d="M9.99625 2.5H10.0038M9.99675 17.5H10.0043M15.299 4.69666H15.3065M4.69507 15.3033H4.70256M4.69507 4.69706H4.70256M15.2985 15.3037H15.306M17.4925 10.0005H17.5M2.5 10.0005H2.50748"
                  stroke="#E65527"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Button>
          <Button
            onClick={() => setTheme("light")}
            className="bg-[#e655271a] hover:bg-[#e655271a] ring-offset-1 ring-[#e654271f] ring p-3.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="sun-01">
                <path
                  id="name"
                  d="M14.1673 10.0007C14.1673 12.3018 12.3018 14.1673 10.0007 14.1673C7.69947 14.1673 5.83398 12.3018 5.83398 10.0007C5.83398 7.69947 7.69947 5.83398 10.0007 5.83398C12.3018 5.83398 14.1673 7.69947 14.1673 10.0007Z"
                  fill="#E65527"
                  stroke="#E65527"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path
                  id="name_2"
                  d="M9.99625 2.5H10.0038M9.99675 17.5H10.0043M15.299 4.69666H15.3065M4.69507 15.3033H4.70256M4.69507 4.69706H4.70256M15.2985 15.3037H15.306M17.4925 10.0005H17.5M2.5 10.0005H2.50748"
                  stroke="#E65527"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
