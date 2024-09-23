import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UserInfo() {
  return (
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
  );
}
