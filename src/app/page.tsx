import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-[100%] h-screen " >
      <Header />

      <div className="flex h-screen">
        <div className="w-1/2 flex-col justify-center items-center m-12 mt-[200px]">
          <h1 className="w-[496px] text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000] ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>

          <p className="w-[850px] h-[147px] size-[30px] leading-[49.35px] tracking-[2.5%] text-[#ddc359] text-3xl">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button className="size-[30px] leading-[37.5px] w-[288px] rounded-[10px] h-[58px] text-[#fffefe] bg-[#A29875] mt-[90px]  text-3xl">
            Explore Now
          </button>
        </div>

        <div className="w-1/2 h-[]  flex justify-center items-center   rounded-[1px] mt-14 ml-60">
          <Image
            src={"/rs-layer-wrap ⏵ rs-layer (1).png"}
            alt="rs-layer-wrap ⏵ rs-layer (1)"
            width={490}
            height={667}
          />
        </div>
      </div>
    </div>
  );
}
