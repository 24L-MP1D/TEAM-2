
import OrderHistory from "./orderHistory";
import UserSection from "./userSection";

export default function UserProfile() {
  return (
    <div className="bg-[#f7f7f8] text-black flex justify-center">
      <div className="flex gap-5 w-[884px] mt-[105px]">
        <div className="flex flex-col items-start gap-5">
          <button className="w-[244px] h-9 bg-white rounded-2xl font-semibold text-sm text-start px-4 py-2 text-[#09090B]">
            Хэрэглэгчийн хэсэг
          </button>
          <button className="w-[244px] h-9 bg-white rounded-2xl font-semibold text-sm text-start px-4 py-2 text-[#09090B]">
            Захиалгын түүх
          </button>
        </div>
        <UserSection/>
        <OrderHistory/> 
      </div>
    </div>
  );
}
