"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const MobileViewNavbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="bg-white md:hidden block">
      <nav className="py-3 pl-[26px] pr-[15px] flex items-center justify-between">
        <div>
          <Image
            src="/assets/images/brand-logo.png"
            alt="brand logo"
            width={71.6}
            height={36}
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[42px] h-[42px] bg-[#fadfd6b4] rounded-[8px] flex items-center justify-center p-1">
            <button className="bg-[#fceee9] w-full h-full flex items-center justify-center rounded-[4px]">
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
            </button>{" "}
          </div>
          <div className="w-[42px] h-[42px] bg-[#e7e7e7] rounded-[8px] flex items-center justify-center p-1">
            <button className="bg-[#e7e7e7] w-full h-full flex items-center justify-center rounded-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="menu-01">
                  <path
                    id="name"
                    d="M3.33301 4.16602H16.6663"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="name_2"
                    d="M3.33301 10H16.6663"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="name_3"
                    d="M3.33301 15.834H16.6663"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>{" "}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileViewNavbar;
