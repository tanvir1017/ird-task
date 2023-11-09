import { ChevronDown } from "lucide-react";
import Image from "next/image";

const MenuListMobileView = () => {
  return (
    <div className="md:hidden block bg-white py-3 px-4 rounded-lg my-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/icons/mobile-menu.png"
            alt="mobile fruits menu"
            width={30}
            height={100}
          />
          <h4 className="font-bold ml-3">Select Food Item</h4>
        </div>
        <div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default MenuListMobileView;
