import Image from "next/image";

const EmptyPage = () => {
  return (
    <div className="bg-white h-screen rounded-xl grid place-content-center ">
      <div className=" rounded-2xl">
        <Image
          src="/assets/images/not-found.png"
          alt="Empty page picture"
          width={400}
          height={100}
        />

        <h1 className="text-center mt-10 font-extrabold text-3xl">
          This page is empty
        </h1>
      </div>
    </div>
  );
};

export default EmptyPage;
