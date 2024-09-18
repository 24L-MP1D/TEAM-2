import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function UserProfile() {
  return (
    <div className="bg-[#f7f7f8] text-black flex justify-center">
      <div className="w-[884px] mt-[105px]">
        <div className="flex gap-5">
          <div className="flex flex-col items-start gap-1">
            <Button asChild variant="default2" className="w-[244px] h-9">
              <Link href="/user">Хэрэглэгчийн хэсэг</Link>
            </Button>
            <Button variant={"default2"} className="w-[244px] h-9 bg-transparent">
              <Link href="/orderHistory">Захиалгын түүх</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-6 flex-1 pb-[156px]">
            <div className="font-bold text-lg border-solid border-b-[1px] border-[#E4E4E7] pb-6">
              Хэрэглэгчийн хэсэг
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                Овог:
                <Input className="rounded-full bg-white" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                Нэр:
                <Input className="rounded-full bg-white" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                Утасны дугаар:
                <Input className="rounded-full bg-white" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                Имэйл хаяг:
                <Input className="rounded-full bg-white" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                Хаяг:
                <Textarea className="rounded-3xl bg-white" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-[#2563EB] rounded-[18px] text-[#FAFAFA] px-9 py-2 text-sm font-medium mt-4 ">
                  Мэдээлэл шинэчлэх
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
