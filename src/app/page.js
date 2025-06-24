import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import HeaderNav from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <HeaderNav />
      <main className="">
        <div className="flex justify-center items-center mx-80 my-30 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl">Your Name Here</h1>
            <p className="w-4/5">Hi, I’m Jonas, a Danish student currently studying at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I’m passionate about web development and digital design, and I’m always exploring new tools and technologies to improve my skills.</p>
            <button className="bg-[#3f8e00] w-3xs flex justify-center items-center gap-2 py-4">Get in touch <MdArrowForwardIos /></button>
          </div>
          <Image
            className="rounded-full"
            src="/profile.png"
            alt="Your Name"
            width={400}
            height={400}
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
