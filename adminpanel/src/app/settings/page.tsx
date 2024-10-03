import LeftBar from "@/components/leftBar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function settings() {
  return (
    <div className="flex">
      <LeftBar />
      <div className="mx-auto">
        <div className="bg-[#FFFFFF] py-8 px-[29px] rounded-lg">
          <div className="text-[#121316] font-semibold text-lg">Тохиргоо</div>
          <div>
            <div className="py-[14px] px-3 flex justify-between">
              <div className="text-[#121316]">Эхний бүтээгдэхүүнээ нэмнэ үү</div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
