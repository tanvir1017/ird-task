import LeftSidebar from "@/components/dashboard/home/left-sidebar";
import MainContent from "@/components/dashboard/home/main-content";
import RightSidebar from "@/components/dashboard/home/right-sidebar";
import MenuListMobileView from "@/components/dashboard/menu-list-mobile";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-1.5 mt-0 overflow-hidden mb-5">
      <MenuListMobileView />
      <div className="2xl:col-span-3 lg:col-span-4 col-span-3 md:block hidden  bg-white rounded-[10px] p-[15px] border h-[49rem]  overflow-hidden">
        <div id="SCROLLER" className=" p-3 h-[100%] rounded-md overflow-y-auto">
          <LeftSidebar />
        </div>
      </div>
      <div className="2xl:col-span-7 lg:col-span-8 bg-white rounded-[15px] md:p-2 border mt-3 md:mt-0">
        <MainContent />
      </div>
      <div className="2xl:block col-span-2 md:block hidden bg-white rounded-[15px] h-[20rem] p-[10px] border">
        <RightSidebar />
      </div>
    </div>
  );
}
