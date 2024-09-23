"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useState} from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
export default function AddProduct() {
  // const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  const[name, setName]=useState('');
  const[addInfo, setAddInfo]=useState('');
  const[barCode, setBarCode]=useState('');


  const createProduct=async()=>{
    try{
      fetch(`http://localhost:4000/product`,{
        method:"POST",
        body:JSON.stringify({
          name:name,
          addInformation: addInfo,
          barCode: barCode,
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      .then(()=>{
        console.error("successfully created the product")
        setName('');
      setAddInfo('');
      setBarCode('');
      })

    }catch(error){
      alert('Failed to create the product. Please try again later.');
      console.error('error happened during creating the product', error);
    }
  }
  return (
    <div className="bg-[#F7F7F8]">
      <div className="py-8 px-8 flex gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFFFFF] rounded-xl h-[312px]">
            <div className="py-6 px-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Бүтээгдэхүүний нэр
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Нэр"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[44px] text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Нэмэлт мэдээлэл
                </Label>
                <Textarea
                  value={addInfo} onChange={(e)=>setAddInfo(e.target.value)}
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  className="bg-[#F7F7F8] border-[#D6D8DB]  w-[515px] h-[72px] text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Барааны код
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="#12345678"
                  value={barCode}
                  onChange={(e)=>setBarCode(e.target.value)}
                  className="bg-[#F7F7F8] border-[#D6D8DB]  w-[515px] h-[44px] text-black"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl w-[563px] h-[213px]">
            <div className="py-6 px-6">
              <h2 className="text-[#000000] font-semibold text-base">
                Бүтээгдэхүүний зураг
              </h2>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl ">
            <div className="py-6 px-6 flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Үндсэн үнэ
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Үндсэн үнэ"
                  className="bg-[#F7F7F8] border-[#D6D8DB] h-[56px] w-[250px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Үлдэгдэл тоо ширхэг
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="bg-[#F7F7F8] border-[#D6D8DB] h-[56px] w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFFFFF] rounded-xl h-[232px]">
            <div className="py-6 px-6">
              <div className="flex flex-col gap-2">
                <Label className="text-[#121316] font-semibold text-sm">
                  Ангилал
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="нэмэх"
                  className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[56px]"
                />

                <Label className="text-[#121316] font-semibold text-sm">
                  Ангилал
                </Label>
                {/* <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      role="combobox"
                      aria-expanded={open}
                      className="w-[515px] h-[56px] bg-[#F7F7F8] hover:bg-[#F7F7F8] text-black justify-between"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        : "сонгох"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Ангилал хайх..." />
                      <CommandList>
                        <CommandEmpty>Ангилал олдсонгүй.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover> */}
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl h-[228px]">
            <div className="pt-6 pl-6">
              <h1 className="text-[#000000] text-lg font-semibold">Төрөл</h1>
              <div className="flex pt-6 gap-6 items-center ">
                <h2 className="text-[#000000] font-normal text-sm ">Өнгө</h2>
                <Button className=" bg-[#ECEDF0] rounded-full py-1 px-1 w-6 h-6 ">
                  <Plus color="black" size={20} />
                </Button>
              </div>
              <div className="flex gap-6 items-center pt-2">
                <h2 className="text-[#000000] font-normal text-sm ">Хэмжээ</h2>
                <Button className=" bg-[#ECEDF0] rounded-full py-1 px-1 w-6 h-6 ">
                  <Plus color="black" size={20} />
                </Button>
              </div>

              <div className="py-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="text-[#121316]">Төрөл нэмэх</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl h-[195px]">
            <div className="pt-6 pl-6">
              <h1 className="text-[#000000] text-lg font-semibold">Таг</h1>
              <Input
                  type="email"
                  id="email"
                  placeholder="Таг нэмэх..."
                  className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[56px] pt-2"
                />
                <p className="text-[#5E6166] pt-2">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>

            </div>
            </div>
        </div>
      </div>
      <div className="flex gap-6 pr-4 pl-[990px]">
        <Button className="bg-[#FFFFFF] text-black hover:bg-[#121316] hover:text-white">Ноорог</Button>
        <Button className="bg-[#FFFFFF]   text-black hover:bg-[#121316] hover:text-white" onClick={createProduct}>Нийтлэх</Button>
      </div>

    </div>
  );
}
