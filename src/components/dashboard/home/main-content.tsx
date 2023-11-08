import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

function MainContent() {
  return (
    <div className="py-[44px] pr-[44px]">
      <div className="flex items-start">
        <div className="px-[22px]">
          <div className="mt-[50px]">
            <a href="#" className="mb-[22px] block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
                  fill="#1877F2"
                />
                <path
                  d="M21.7632 14C21.7632 10.15 18.6132 7 14.7632 7C10.9132 7 7.76318 10.15 7.76318 14C7.76318 17.5 10.3007 20.3875 13.6257 20.9125V16.0125H11.8757V14H13.6257V12.425C13.6257 10.675 14.6757 9.7125 16.2507 9.7125C17.0382 9.7125 17.8257 9.8875 17.8257 9.8875V11.6375H16.9507C16.0757 11.6375 15.8132 12.1625 15.8132 12.6875V14H17.7382L17.3882 16.0125H15.7257V21C19.2257 20.475 21.7632 17.5 21.7632 14Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="mb-[22px] block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
                  fill="#2867B2"
                />
                <path
                  d="M10.9132 21H7.93818V11.6375H10.9132V21ZM9.42568 10.325C8.46318 10.325 7.76318 9.625 7.76318 8.6625C7.76318 7.7 8.55068 7 9.42568 7C10.3882 7 11.0882 7.7 11.0882 8.6625C11.0882 9.625 10.3882 10.325 9.42568 10.325ZM21.7632 21H18.7882V15.925C18.7882 14.4375 18.1757 14 17.3007 14C16.4257 14 15.5507 14.7 15.5507 16.0125V21H12.5757V11.6375H15.3757V12.95C15.6382 12.3375 16.6882 11.375 18.1757 11.375C19.8382 11.375 21.5882 12.3375 21.5882 15.225V21H21.7632Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="mb-[22px] block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M21.7632 9.625C21.2382 9.8875 20.7132 9.975 20.1007 10.0625C20.7132 9.7125 21.1507 9.1875 21.3257 8.4875C20.8007 8.8375 20.1882 9.0125 19.4882 9.1875C18.9632 8.6625 18.1757 8.3125 17.3882 8.3125C15.5507 8.3125 14.1507 10.0625 14.5882 11.8125C12.2257 11.725 10.1257 10.5875 8.63818 8.8375C7.85068 10.15 8.28818 11.8125 9.51318 12.6875C9.07568 12.6875 8.63818 12.5125 8.20068 12.3375C8.20068 13.65 9.16318 14.875 10.4757 15.225C10.0382 15.3125 9.60068 15.4 9.16318 15.3125C9.51318 16.45 10.5632 17.325 11.8757 17.325C10.8257 18.1125 9.25068 18.55 7.76318 18.375C9.07568 19.1625 10.5632 19.6875 12.1382 19.6875C17.4757 19.6875 20.4507 15.225 20.2757 11.1125C20.8882 10.7625 21.4132 10.2375 21.7632 9.625Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-[28px] h-[28px] bg-[#E55527] rounded-full flex items-center justify-center"
            >
              <MoreHorizontal size={20} className="text-white" />
            </a>
          </div>
        </div>
        <div className="">
          {/* heading section of main content start from here */}
          <div className="flex items-start justify-between">
            <div id="LEFT-SIDE-CONTENT">
              <h1 className="text-3xl font-extrabold capitalize">
                Health benefits of an avocado
              </h1>
              <div>
                <div className="my-[30px]">
                  <h4 className="font-bold text-lg">Supports eye health: </h4>
                  <p className="text-sm">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
                <div className="my-[30px]">
                  <h4 className="font-bold text-lg">Supports eye health: </h4>
                  <p className="text-sm">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
              </div>
            </div>
            <div id="RIGHT-SIDE-CONTENT" className="ml-10">
              <div className="relative w-[420px] h-[260px] overflow-hidden">
                <Image
                  src="/assets/images/avocado.png"
                  alt="Avocado Picture"
                  fill
                  className="absolute object-cover rounded-[30px]"
                />
              </div>
            </div>
          </div>
          {/* heading section of main content end from here */}

          {/* SECOND SECTION START FROM HERE */}
          <div className="my-[42px]">
            <div>
              <h4 className="font-bold text-lg">Supports eye health: </h4>
              <p className="text-sm mt-[15px]">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration..
              </p>
            </div>
          </div>
          {/* SECOND SECTION END FROM HERE */}

          {/* THIRD SECTION START FROM HERE */}
          <div className="flex items-center justify-between">
            <div id="LEFT-SIDE-CONTENT">
              <div className="relative w-[420px] h-[265px] overflow-hidden">
                <Image
                  src="/assets/images/apple.png"
                  alt="Avocado Picture"
                  fill
                  className="absolute object-cover rounded-[30px]"
                />
              </div>
            </div>
            <div id="RIGHT-SIDE-CONTENT" className="ml-[44px]">
              <div className="">
                <h4 className="font-bold text-lg">Supports eye health: </h4>
                <p className="text-sm mt-[15px]">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.. Spinach contains
                  high levels of vitamin A and other antioxidants that help
                  maintain healthy vision and protect against age-related
                  macular degeneration.. Spinach contains high levels of vitamin
                  A and other antioxidants that help maintain healthy vision and
                  protect against age-related macular degeneration.. Spinach
                  contains high levels of vitamin A and other antioxidants that
                  help maintain healthy
                </p>
              </div>
            </div>
          </div>
          {/* THIRD SECTION END FROM HERE */}

          {/* FEEDBACK SECTION START FROM HERE */}
          <div className="mt-[62px]">
            <h3 className="text-lg font-extrabold">Was This Helpful?</h3>
            <div className="flex items-center  space-x-2 mt-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                    fill="#E55527"
                    stroke="#E55527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                    fill="#E55527"
                    stroke="#E55527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                    fill="#E55527"
                    stroke="#E55527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                    fill="#E55527"
                    stroke="#E55527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>{" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M16.7794 4.01825L18.8325 8.1584C19.1125 8.73472 19.859 9.28752 20.489 9.39337L24.2102 10.0167C26.59 10.4167 27.15 12.1574 25.4351 13.8746L22.5421 16.7915C22.0521 17.2855 21.7839 18.2382 21.9355 18.9205L22.7638 22.5313C23.417 25.3894 21.9121 26.495 19.4041 25.0012L15.9162 22.9194C15.2863 22.5431 14.2481 22.5431 13.6064 22.9194L10.1185 25.0012C7.62208 26.495 6.10559 25.3776 6.75886 22.5313L7.5871 18.9205C7.73874 18.2382 7.47044 17.2855 6.98049 16.7915L4.08748 13.8746C2.38433 12.1574 2.93261 10.4167 5.31234 10.0167L9.0336 9.39337C9.65186 9.28752 10.3984 8.73472 10.6784 8.1584L12.7315 4.01825C13.8514 1.77175 15.6712 1.77175 16.7794 4.01825Z"
                    stroke="#E55527"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* FEEDBACK SECTION END FROM HERE */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
