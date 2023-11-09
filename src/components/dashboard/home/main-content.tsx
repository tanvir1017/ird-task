import Image from "next/image";
import SocialIcons from "./social-icont";
import SocialIconsMobile from "./social-icont-mobile";

function MainContent() {
  return (
    <div className="md:py-[44px] py-4 px-3  md:pr-[44px]">
      <div className="flex items-start">
        {/* Social icons list */}
        <SocialIcons />
        {/* Social icons list */}
        <div className="">
          {/* heading section of main content start from here */}
          <div className="flex md:flex-row flex-col items-start justify-between">
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
            {/* For Mobile View  */}
            <div className="relative w-full h-[140px] overflow-clip rounded-[10px] md:hidden block">
              <Image
                src="/assets/images/avocado.png"
                alt="Avocado Picture"
                fill
                className="absolute object-cover"
              />
            </div>
            {/* For Mobile View  */}
            <div id="RIGHT-SIDE-CONTENT" className="md:ml-10 md:block hidden">
              <div className="relative w-[420px] h-[260px] overflow-hidden ">
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
          <div className="md:my-[42px] my-[24px]">
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
          <div className="flex md:flex-row flex-col md:items-center md:justify-between">
            {/* For Mobile View  */}
            <div className="relative w-full h-[140px] overflow-clip rounded-[10px] md:hidden block">
              <Image
                src="/assets/images/apple.png"
                alt="Avocado Picture"
                fill
                className="absolute object-cover"
              />
            </div>
            {/* For Mobile View  */}
            {/* For Desktop View  */}
            <div id="LEFT-SIDE-CONTENT" className="hidden md:block">
              <div className="relative w-[420px] h-[265px] overflow-clip  rounded-[30px]">
                <Image
                  src="/assets/images/apple.png"
                  alt="Avocado Picture"
                  fill
                  className="absolute object-cover"
                />
              </div>
            </div>
            {/* For Desktop View  */}
            <div id="RIGHT-SIDE-CONTENT" className="md:ml-[44px] mt-[24px]">
              <div className="">
                <h4 className="font-bold text-lg">Supports eye health: </h4>
                <p className="text-sm md:mt-[15px] mt-[10px]">
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
          <div className="md:mt-[62px] mt-[44px]">
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
          <div>
            <SocialIconsMobile />
          </div>
          {/* FEEDBACK SECTION END FROM HERE */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
