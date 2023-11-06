import LeftSidebar from "@/components/dashboard/home/left-sidebar";
import MainContent from "@/components/dashboard/home/main-content";
import RightSidebar from "@/components/dashboard/home/right-sidebar";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-1.5">
      <div className="col-span-3 bg-white rounded-[10px] p-[15px] border h-[90%] overflow-y-auto">
        <LeftSidebar />
      </div>
      <div className="col-span-7 bg-white rounded-[15px] p-2 border">
        <MainContent />
      </div>
      <div className="col-span-2 bg-white rounded-[15px] p-2 border">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
