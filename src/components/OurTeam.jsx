import React from "react";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-to-b mt-[110.6px]"
      style={{
        background: "linear-gradient(180deg, #17786C 0%, #1B504A 100%)",
      }}
    >
      {/* Head */}
      <div>
        <h6 className="text-[20px] text-[#FFFFFF] font-normal text-center mt-[63px]">
          Lorem ipsum dolor sit
        </h6>

        <h1 className="text-[60px] text-[#FFFFFF] font-['Libre_Franklin'] font-medium text-center mt-[40px] mb-[30px]">
          Our Team
        </h1>

        <p className="text-[20px] text-[#FFFFFF] text-center font-['Libre_Franklin']">
          Lorem ipsum dolor sit amet consectetur. Cursus vitae leo ac diam quam.
          Fusce aenean blandit varius <br /> faucibus sed ornare tristique
          interdum in.{" "}
        </p>
      </div>

      {/* Doctors */}

      <div className="flex justify-center items-center gap-[30px] mt-[51px] mb-[105px]">
        <div>
          <Image
            src="/images/syed.jpg"
            alt="syed"
            width={430}
            height={407.992431640625}
            className="rounded-[24px] h-[407.992431640625px]"
          />

          <div className="relative w-[429.995361328125px] mt-[25.74px]">
            <h2 className="absolute w-[491px] left-[22.55px] top-[19.73px] text-[32px] font-medium font-['Libre_Franklin']">
              Syed Z. Sayeedi <br />
              <span className="text-[20px] text-[#8B8B8B] font-['Libre_Franklin'] font-normal">
                DDS
              </span>
            </h2>
            <p className="absolute font-normal text-[#09243C] text-[20px] top-[143.76px] left-[22.55px] font-['Libre_Franklin']">
              Lorem ipsum dolor sit amet <br /> consectetur Id sapien <br />{" "}
              egestas purus.
            </p>
            <Image
              src="/images/Our Team Subtract.png"
              alt="Subtract"
              width={429.8721618652344}
              height={249.466796875}
              className=""
            />

            <button className="absolute left-[293.16px] top-[180.41px] w-[131.07577514648438px] h-[66px] rounded-[60px] border-[2.2px] border-[#CAD1D4] px-[34.17px] py-[33.07px] flex items-center justify-center gap-[11.02px]">
              <Image
                src="/images/white arrow.png"
                alt="Arrow"
                width={81.74618530273438}
                height={2}
                className=""
              />
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/images/Menmet.png"
            alt="menmet"
            width={430}
            height={407.992431640625}
            className="rounded-[24px] h-[407.992431640625px]"
          />

          <div className="relative w-[429.995361328125px] mt-[25.74px]">
            <h2 className="absolute w-[491px] left-[22.55px] top-[19.73px] text-[32px] font-medium font-['Libre_Franklin']">
            Manmeet Virk <br />
              <span className="text-[20px] text-[#8B8B8B] font-['Libre_Franklin'] font-normal">
                DDS
              </span>
            </h2>
            <p className="absolute font-normal text-[#09243C] text-[20px] top-[143.76px] left-[22.55px] font-['Libre_Franklin']">
              Lorem ipsum dolor sit amet <br /> consectetur Id sapien <br />{" "}
              egestas purus.
            </p>
            <Image
              src="/images/Our Team Subtract.png"
              alt="Subtract"
              width={429.8721618652344}
              height={249.466796875}
              className=""
            />

            <button className="absolute left-[293.16px] top-[180.41px] w-[131.07577514648438px] h-[66px] rounded-[60px] border-[2.2px] border-[#CAD1D4] px-[34.17px] py-[33.07px] flex items-center justify-center gap-[11.02px]">
              <Image
                src="/images/white arrow.png"
                alt="Arrow"
                width={81.74618530273438}
                height={2}
                className=""
              />
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/images/Laiba.jpg"
            alt="laiba"
            width={430}
            height={407.992431640625}
            className="rounded-[24px] h-[407.992431640625px]"
          />

          <div className="relative w-[429.995361328125px] mt-[25.74px]">
            <h2 className="absolute w-[491px] left-[22.55px] top-[19.73px] text-[32px] font-medium font-['Libre_Franklin']">
            Laiba Sayeedi <br />
              <span className="text-[20px] text-[#8B8B8B] font-['Libre_Franklin'] font-normal">
                RDH
              </span>
            </h2>
            <p className="absolute font-normal text-[#09243C] text-[20px] top-[143.76px] left-[22.55px] font-['Libre_Franklin']">
              Lorem ipsum dolor sit amet <br /> consectetur Id sapien <br />{" "}
              egestas purus.
            </p>
            <Image
              src="/images/Our Team Subtract.png"
              alt="Subtract"
              width={429.8721618652344}
              height={249.466796875}
              className=""
            />

            <button className="absolute left-[293.16px] top-[180.41px] w-[131.07577514648438px] h-[66px] rounded-[60px] border-[2.2px] border-[#CAD1D4] px-[34.17px] py-[33.07px] flex items-center justify-center gap-[11.02px]">
              <Image
                src="/images/white arrow.png"
                alt="Arrow"
                width={81.74618530273438}
                height={2}
                className=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
