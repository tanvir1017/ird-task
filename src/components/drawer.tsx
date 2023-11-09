import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";
import LeftSidebar from "./dashboard/home/left-sidebar";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
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
      </SheetTrigger>
      <SheetContent side={"left"} className="rounded-r-3xl">
        <LeftSidebar />
      </SheetContent>
    </Sheet>
  );
}
