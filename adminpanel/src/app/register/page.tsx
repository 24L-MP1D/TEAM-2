"use client";

import { Button } from "../../../public/ui/button";
import { Input } from "../../../public/ui/input";
import { Label } from "../../../public/ui/label";
import { Separator } from "../../../public/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      fetch(`http://localhost:4000/register`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {});
    } catch (error) {
      alert("Failed to load data. Please try again later.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      {/* <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={32}
        className="pt-[44px] pl-[44px] "
      /> */}
      <div className="container mx-auto login-box flex  align-items-center w-[334px] mt-20">
        <div className=" border-[#ECEDF0] border-[1px] px-10 py-10 rounded-xl">
          <h1 className="mx-center font-bold mb-5 text-center text-[#121316] text-[32px]">
            Бүртгүүлэх
          </h1>

          <div className="flex flex-col gap-4 pt-6">
            <div className="flex flex-col gap-2">
              <Label className="text-[#121316] font-normal text-base  ">
                Таны имэйл{" "}
              </Label>
              <Input
                type="name"
                placeholder="Имэйл"
                className="rounded-sm w-full  bg-[#F7F7F8] h-[56px]"
                id="name"
                value={email}
                onChange={(e) => setName(e.target.value)}
              ></Input>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[#121316] font-normal text-base ">
                Таны нэр{" "}
              </Label>
              <Input
                type="name"
                placeholder="Нэр"
                className="rounded-sm w-full  bg-[#F7F7F8] h-[56px]"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
            </div>

            <div className="relative">
              <Button className="h-[60px] w-[360px] text-lg bg-black text-[#FFFFFF] flex relative rounded-lg">
                Дараах
                <ArrowRight color="white" className="absolute right-5" />
              </Button>
            </div>

            <div className="h-[250px] w-[360px] border-[#ECEDF0] border-t-2 border-b-2 flex flex-col gap-4 pt-4">
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2 pt-6">
                <Image src="/google.png" alt="google" width={24} height={24} />
                  Google-ээр нэвтрэх
              </Button>
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2">
                <Image
                  src="/microsoft.png"
                  alt="google"
                  width={24}
                  height={24}
                />
                Microsoft-оор нэвтрэх
              </Button>
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2">
                <Image src="/apple.png" alt="google" width={24} height={24} />
                Apple-аар нэвтрэх
              </Button>
            </div>
            
            <div className="flex gap-1 justify-center">
                <h2 className="text-[#525252]">Бүртгэлтэй юу?</h2>
                <a className="text-[#525252] underline">Нэвтрэх</a>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
