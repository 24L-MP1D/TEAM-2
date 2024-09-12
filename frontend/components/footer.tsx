import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";




export default function Footer() {
  return (
    <footer className="bg-[#111111] m-auto max-w-[1440px]  mt-40 py-16 px-[200px] text-white flex flex-col gap-[43px]">
      <div className="flex justify-between items-center border-b-[1.5px] border-[#ffffff] border-opacity-10 border-solid pb-[43px]">
        <Image src="/Symbol.png" alt="icon" width={42} height={35}/>
        <div className="flex gap-[38px] items-center">
          <div className="flex gap-[20px] items-center">
            <div className="border-[1px] border-white border-opacity-10 w-12 h-12 rounded-full flex justify-center items-center">
              <IoCallOutline className="w-[20px] h-[20px]" />
            </div>
            <div className="text-sm font-medium">(976) 7007-1234</div>
          </div>
          <div className="flex gap-[20px] items-center">
            <div className="border-[1px] border-white border-opacity-10 w-12 h-12 rounded-full flex justify-center items-center">
              <FiMail className="w-[20px] h-[20px]" />
            </div>
            <div className="text-sm font-medium">contact@ecommerce.mn</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm font-medium">© 2024 Ecommerce MN</div>
        <div className="flex gap-[26px]">
          <FaFacebook className="w-[20px] h-[20px]" />
          <FaInstagram className="w-[20px] h-[20px]"/>
          <FaTwitter className="w-[20px] h-[20px]"/>
          <FaLinkedin className="w-[20px] h-[20px]"/>
        </div>
      </div>
    </footer>
  );
}
