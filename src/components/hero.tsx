import Image from "next/image";
import mygig from "public/mygig.png";

const HeroPage = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center py-12 bg-black">
      <div className="absolute inset-0 z-10 opacity-30 ">
        <Image
          src={mygig}
          fill
          style={{ objectFit: "cover" }}
          alt="my gig img"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800"></div>
      <div className="relative z-0 text-white">
      <p className="font-bold uppercase text-5xl text-center">Create you fiverr gig</p>
      </div>
    </section>
  );
};

export default HeroPage;
