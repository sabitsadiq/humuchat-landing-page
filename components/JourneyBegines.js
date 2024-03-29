import React from "react";
import Title from "./Title";
import Heading from "./Heading";
import Image from "next/image";
const JourneyBegines = () => {
  return (
    <section className="">
      <Image
        src="/images/Rectangle-10.png"
        className="hidden md:flex w-full md:h-[46rem] 2xl:h-[55rem]"
        width={760}
        height={710}
        alt="rectangle-10"
      />
      <div className="hidden md:block w-[90%] mx-auto  md:mt-[-44rem] 2xl:mt-[-53rem] md:mb-40 2xl:mb-56 xl:mb-36 lg:mb-56">
        <div className="sm:pb-2">
          <Title text="Journey begins" />
          <h2 className="font-bold text-5xl md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-[30%] text-[#000000] pb-4 xl:p-2;">
            Meet your dream partner
          </h2>
        </div>
        <div className="grid grid-cols-2 xl:gap-20 md:gap-8 mt-4">
          <div className="flex flex-nowrap relative w-full">
            <div className="flex w-full h-full z-10 flex-row gap-[4%] ">
              <div className="w-[48%]">
                <Image
                  className="w-full h-full"
                  src="/images/Rectangle-11.png"
                  width={180}
                  height={180}
                  alt="rectanlge-11"
                />
              </div>
              <div className="w-[48%]">
                <Image
                  className="w-full h-full"
                  src="/images/Rectangle-12.png"
                  width={180}
                  height={180}
                  alt="rectangle-12"
                />
              </div>
            </div>
            <Image
              className=" block absolute top-[18%] left-[10%] w-[calc(100%-10%)] h-[calc(100%-15%)]"
              src="/images/shadow.png"
              width={288}
              height={256}
              alt="shadow"
            />
          </div>
          <div className="flex flex-row xl:w-[68%]">
            <div className="self-center md:self-start md:pt-4">
              <div className="">
                <h1 className="font-semibold text-4xl text-[#000000] pb-8 xl:pb-2 2xl:mb-6">
                  Your perfect Match is just a dm away.
                </h1>
                <p className="font-normal text-xl 2xl:mb-6">
                  Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
                  suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
                  tincidunt urna neque neque.
                </p>
              </div>

              <button className="flex px-12 py-2 2xl:px-24 2xl:py-6 border-none text-[20px] 2xl:text-3xl 2xl:mt-8 leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] mt-6 mb-8 hover:bg-[#fff] hover:text-[#042F88] hover:ring-[#042F88] ring-1">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* content for mobile and tablet view start */}
      <div className="w-[90%] mx-auto md:hidden">
        <div className="sm:pb-2">
          <Title text="Journey begins" />
          <Heading text="Meet your dream partner" />
        </div>
        <div className="grid grid-cols-1  gap-4 mt-4">
          <div className="flex flex-col gap-8">
            <Image
              className="w-full h-full"
              src="/images/Rectangle-11.png"
              width={250}
              height={250}
              alt="rectangle-11"
            />
            <Image
              className="w-full h-full"
              src="/images/Rectangle-12.png"
              width={250}
              height={250}
              alt="rectangle-12"
            />
          </div>
          <div className="w-[90%]">
            <Heading text="Your perfect Match is just a dm away." />
            <p>
              Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
              suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
              tincidunt urna neque neque.
            </p>
            <button className="flex px-12 py-2 border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] mt-6 mb-8 hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1">
              button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyBegines;
