"use client";

import Header from "@/components/header";
import LeftBar from "@/components/leftBar";



export default function Home() {
  return (
    <div className="bg-[#F7F7F8]">
      <Header />
      {/* doorh div dotr componentuuda oruularai */}
      <div className="max-w-[1440px] mx-auto ">
        <LeftBar />
      </div>
    </div>
  );
}