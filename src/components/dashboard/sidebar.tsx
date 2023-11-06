"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="flex h-screen w-full flex-col items-center justify-center overflow-y-auto  bg-white py-8 ml-2">
      <nav className="flex flex-col items-center  space-y-6">
        <Link
          href="/home"
          className={cn(
            "rounded-lg text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none h-9 w-9 leading-9 text-center",
            {
              ["bg-[#e655271a]"]: pathName === "/home",
            }
          )}
        >
          <svg
            className="inline-block align-middle"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="home-01">
              <path
                id="name"
                d="M14.25 15.584C13.5171 16.1545 12.5544 16.5007 11.5 16.5007C10.4457 16.5007 9.48289 16.1545 8.75 15.584"
                stroke={pathName === "/home" ? "#E65527" : "#000"}
                strokeWidth="1.5"
              />
              <path
                id="name_2"
                d="M2.65609 12.113C2.33249 10.0072 2.17069 8.95431 2.56881 8.02092C2.96692 7.08751 3.85018 6.44888 5.6167 5.17162L6.93656 4.21732C9.13408 2.62843 10.2328 1.83398 11.5007 1.83398C12.7685 1.83398 13.8672 2.62843 16.0647 4.21732L17.3846 5.17162C19.1512 6.44888 20.0344 7.08751 20.4325 8.02092C20.8306 8.95431 20.6688 10.0072 20.3452 12.113L20.0693 13.9087C19.6105 16.8938 19.3811 18.3864 18.3106 19.2769C17.24 20.1673 15.6749 20.1673 12.5446 20.1673H10.4568C7.32645 20.1673 5.76132 20.1673 4.69073 19.2769C3.62015 18.3864 3.39078 16.8938 2.93205 13.9087L2.65609 12.113Z"
                // stroke="#E65527"
                stroke={pathName === "/home" ? "#E65527" : "#000"}
                // stroke="#000"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </Link>{" "}
        <Link
          href="/"
          className={cn(
            "rounded-lg text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none h-9 w-9 leading-9 text-center",
            {
              ["bg-[#e655271a]"]: pathName === "/dashboard",
            }
          )}
        >
          <svg
            className="inline-block align-middle"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="dashboard-circle">
              <path
                id="name"
                d="M16.2708 10.1257C18.4224 10.1257 20.1667 8.38143 20.1667 6.22982C20.1667 4.07821 18.4224 2.33398 16.2708 2.33398C14.1192 2.33398 12.375 4.07821 12.375 6.22982C12.375 8.38143 14.1192 10.1257 16.2708 10.1257Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_2"
                d="M5.72982 10.1257C7.88143 10.1257 9.62565 8.38143 9.62565 6.22982C9.62565 4.07821 7.88143 2.33398 5.72982 2.33398C3.57821 2.33398 1.83398 4.07821 1.83398 6.22982C1.83398 8.38143 3.57821 10.1257 5.72982 10.1257Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_3"
                d="M16.2708 20.6667C18.4224 20.6667 20.1667 18.9224 20.1667 16.7708C20.1667 14.6192 18.4224 12.875 16.2708 12.875C14.1192 12.875 12.375 14.6192 12.375 16.7708C12.375 18.9224 14.1192 20.6667 16.2708 20.6667Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_4"
                d="M5.72982 20.6667C7.88143 20.6667 9.62565 18.9224 9.62565 16.7708C9.62565 14.6192 7.88143 12.875 5.72982 12.875C3.57821 12.875 1.83398 14.6192 1.83398 16.7708C1.83398 18.9224 3.57821 20.6667 5.72982 20.6667Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>{" "}
        <Link
          href="/"
          className={cn(
            "rounded-lg text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none h-9 w-9 leading-9 text-center",
            {
              ["bg-[#e655271a]"]: pathName === "/send",
            }
          )}
        >
          <svg
            className="inline-block align-middle"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <path
                id="name"
                d="M17.6405 2.85839C17.394 2.60899 17.0875 2.42736 16.7504 2.33105C16.4133 2.23473 16.057 2.22699 15.7161 2.30856L4.71953 4.62471C4.08625 4.71156 3.4898 4.97349 2.99734 5.381C2.50488 5.78852 2.13597 6.32543 1.93217 6.93128C1.72836 7.53712 1.69775 8.18784 1.84378 8.81014C1.98981 9.43244 2.30668 10.0016 2.75871 10.4536L3.93946 11.6336C4.00337 11.6975 4.05405 11.7734 4.0886 11.8569C4.12316 11.9404 4.14091 12.0299 4.14084 12.1202V14.2975C4.14235 14.6037 4.21283 14.9055 4.34702 15.1807L4.34152 15.1855L4.35939 15.2034C4.56078 15.6083 4.88969 15.9357 5.29547 16.1353L5.31334 16.1532L5.31815 16.1477C5.59331 16.2819 5.89517 16.3524 6.20131 16.3539H8.37862C8.56079 16.3537 8.73556 16.4259 8.86453 16.5546L10.0446 17.7346C10.3611 18.0547 10.7378 18.3089 11.153 18.4826C11.5682 18.6564 12.0137 18.7462 12.4638 18.747C12.8389 18.7465 13.2115 18.6853 13.5669 18.5656C14.1672 18.3684 14.7005 18.0075 15.1066 17.5234C15.5127 17.0394 15.7754 16.4515 15.8652 15.8261L18.1848 4.80546C18.2706 4.46158 18.2655 4.10129 18.1701 3.75994C18.0747 3.4186 17.8922 3.10792 17.6405 2.85839ZM4.91266 10.6632L3.73122 9.48312C3.45611 9.21463 3.26329 8.87325 3.1754 8.49903C3.08751 8.12481 3.10818 7.73329 3.235 7.37041C3.35795 6.99812 3.58524 6.66898 3.88984 6.42214C4.19444 6.17529 4.56352 6.02112 4.9532 5.97797L15.8405 3.68588L5.51403 14.0137V12.1202C5.51507 11.8497 5.46246 11.5816 5.35923 11.3315C5.25601 11.0814 5.10422 10.8542 4.91266 10.6632ZM14.5147 15.591C14.4619 15.9706 14.3044 16.328 14.0598 16.6231C13.8152 16.9181 13.4932 17.1391 13.1299 17.2613C12.7666 17.3835 12.3765 17.4021 12.0033 17.3149C11.6301 17.2277 11.2886 17.0382 11.0171 16.7676L9.83498 15.5855C9.64417 15.3936 9.41721 15.2415 9.16723 15.1379C8.91725 15.0344 8.64921 14.9814 8.37862 14.9821H6.48516L16.813 4.6577L14.5147 15.591Z"
                fill="#101010"
              />
            </g>
          </svg>
        </Link>{" "}
        <Link
          href="/"
          className={cn(
            "rounded-lg text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none h-9 w-9 leading-9 text-center",
            {
              ["bg-[#e655271a]"]: pathName === "/video",
            }
          )}
        >
          <svg
            className="inline-block align-middle"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="video-replay">
              <path
                id="name"
                d="M16.2244 19.5568C15.15 19.7077 13.749 19.7077 11.8702 19.7077H10.1285C6.43388 19.7077 4.58657 19.7077 3.43879 18.5599C2.29102 17.4122 2.29102 15.5648 2.29102 11.8702V10.1285C2.29102 6.43388 2.29102 4.58657 3.43879 3.43879C4.58657 2.29102 6.43388 2.29102 10.1285 2.29102H11.8702C15.5648 2.29102 17.4122 2.29102 18.5599 3.43879C19.7077 4.58657 19.7077 6.43388 19.7077 10.1285V11.8702C19.7077 12.9777 19.7077 13.9192 19.6768 14.7257C19.6519 15.3719 19.6396 15.6952 19.3948 15.8159C19.1501 15.9366 18.8764 15.7429 18.3288 15.3555L17.0952 14.4827"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_2"
                d="M13.7005 11.3612C13.5385 11.9357 12.7728 12.3417 11.2416 13.1537C9.76132 13.9385 9.0212 14.3311 8.42474 14.1733C8.17814 14.108 7.95347 13.9842 7.77226 13.8135C7.33398 13.4008 7.33398 12.6003 7.33398 10.9993C7.33398 9.39839 7.33398 8.59785 7.77226 8.18513C7.95347 8.01451 8.17814 7.89064 8.42474 7.82542C9.0212 7.66767 9.76132 8.06012 11.2416 8.84502C12.7728 9.65698 13.5385 10.063 13.7005 10.6374C13.7673 10.8746 13.7673 11.1241 13.7005 11.3612Z"
                stroke="#101010"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>{" "}
        <Link
          href="/"
          className={cn(
            "rounded-lg text-gray-700 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 focus:outline-none h-9 w-9 leading-9 text-center",
            {
              ["bg-[#e655271a]"]: pathName === "/more",
            }
          )}
        >
          <svg
            className="inline-block align-middle"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more-01">
              <path
                id="name"
                d="M10.9962 16.5H11.0037"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_2"
                d="M16.4998 16.5H16.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_3"
                d="M5.49982 16.5H5.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_4"
                d="M10.9962 11H11.0037"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_5"
                d="M10.9998 5.5H11.0073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_6"
                d="M16.4998 11H16.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_7"
                d="M16.4998 5.5H16.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_8"
                d="M5.49982 11H5.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="name_9"
                d="M5.49982 5.5H5.5073"
                stroke="#101010"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>
      </nav>
    </aside>
  );
}
