import { Button } from "@/shadcn/ui/button";
import Image from "next/image";

type fruitsListDataType = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  color: string;
};
const fruitsListData: fruitsListDataType[] = [
  {
    id: 1,
    image: "/assets/fruits/apple.png",
    title: "Apples",
    subtitle: "Vitamin C",
    color: "#ffe6c3",
  },
  {
    id: 2,
    image: "/assets/fruits/apple.png",
    title: "Apples",
    subtitle: "Vitamin C",
    color: "#ffe6c3",
  },
  {
    id: 3,
    image: "/assets/fruits/apple.png",
    title: "Apples",
    subtitle: "Vitamin C",
    color: "#ffe6c3",
  },
  {
    id: 4,
    image: "/assets/fruits/apple.png",
    title: "Apples",
    subtitle: "Vitamin C",
    color: "#ffe6c3",
  },
  {
    id: 55,
    image: "/assets/fruits/apple.png",
    title: "Apples",
    subtitle: "Vitamin C",
    color: "#ffe6c3",
  },
];
function LeftSidebar() {
  return (
    <div className="">
      {/* Tab section start from here */}
      <div className="flex items-center border-[#e655271a] border-2 rounded-[10px] p-1 space-x-1">
        <Button className=" rounded-[7px] w-full hover:bg-[#fceee9] bg-[#fceee9] text-[#E55527]">
          Fruits
        </Button>
        <Button className=" rounded-[7px] w-full hover:bg-white bg-white text-black]">
          Variables
        </Button>
      </div>
      {/* Tab section end from here */}

      {/* search by fruits section start from here */}
      <div className="relative max-w-full mt-4">
        <input
          type="text"
          className="w-full border px-2 py-2.5 rounded-lg  focus:outline-none ring-1 ring-gray-200"
          placeholder="Search by Fruits Name"
        />
        <div className="absolute top-[2.5px] right-[2.5px]">
          <button className="h-10 w-14 text-white rounded-lg bg-[#FCEEE9] text-center">
            <svg
              className="inline-block align-middle"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* search by fruits section end from here */}

      {/* Fruits List section start from here */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Fruits List</h2>

        {/* fruits list section card start from here */}
        <div>
          {fruitsListData.map((fruit) => (
            <div key={fruit.id} className="grid gap-4 grid-cols-12 mt-7">
              <div
                className="w-12 h-12  rotate-45 rounded-xl col-span-3"
                style={{ background: `${fruit.color}` }}
              >
                <Image
                  src={fruit.image}
                  alt={fruit.title}
                  width={42}
                  height={100}
                  className="-rotate-45"
                />
              </div>
              <div className="col-span-8">
                <h4>{fruit.title}</h4>
                <p>{fruit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        {/* fruits list section card end from here */}
      </div>
      {/* Fruits List section end from here */}
    </div>
  );
}

export default LeftSidebar;