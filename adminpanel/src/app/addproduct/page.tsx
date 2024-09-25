"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronsUpDown,
  CircleCheck,
  Plus,
} from "lucide-react";

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
import LeftBar from "@/components/leftBar";

export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [barCode, setBarCode] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<{categoryName: string, _id: string}[]>([]);
  const [typeName, setTypeName] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [tag, setTag] = useState("");

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  useEffect(() => {
    getCategories();
  }, []);

  // Function to handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color); // Remove if already selected
      } else {
        return [...prev, color]; // Add new selection
      }
    });
  };

  // Function to handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSizes((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size); // Remove if already selected
      } else {
        return [...prev, size]; // Add new selection
      }
    });
  };

  // Function to add a new category to the list
  const addCategory = () => {
    // Ensure category is not empty or a duplicate
    createCategory();
    if (category && !categories.includes(category)) {
      setCategories((prevCategories) => [...prevCategories, category]);
      setCategory(""); // Clear input after adding
    }
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-black",
    "bg-slate-500"
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const createCategory=async()=>{
    try{
      fetch(`http://localhost:4000/category`,{
        method:"POST",
        body:JSON.stringify({
          categoryName:category,

        }),
        headers:{
          "Content-type":"application/json; cherset=UTF-8",
        },
      }).then(()=>{
       
        console.log("successfully created the category");
        getCategories();
        setCategory("");

      })

    }catch(error){
      console.error("error happened during creating the category", error);

    }

  }

  const getCategories=async()=>{
    try{
      fetch(`http://localhost:4000/categories`).then(res => res.json()).then(data=> {
        console.log({data})
        setCategories(data)
        
        
      })

    }catch(error){
      console.error("Error occurred while retrieving categories:", error);

    }
  }

  const createProduct = async() => {
    try {
      fetch(`http://localhost:4000/product`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          addInformation: addInfo,
          barCode: barCode,
          price: price,
          qty: qty,
          category: selectedCategory,
          color: selectedColors,
          size: selectedSizes,
          tag: tag,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        console.log("successfully created the product");
        setName("");
        setAddInfo("");
        setBarCode("");
        setPrice("");
        setQty("");
        setCategory("");
        setSelectedCategory(""),
        setSelectedColors([]);
        setSelectedSizes([]);
        setTag("");
      });
     
    } catch (error) {
      alert("Failed to create the product. Please try again later.");
      console.error("error happened during creating the product", error);
    }
  };

  return (
    <div className="flex">
      <LeftBar />
      <div className="bg-[#F7F7F8] w-[100vw] h-[100vw] ">
        <div className="bg-[#FFFFFF] ">
          <div className="py-2 flex gap-4 px-4">
            <ChevronLeft color="black" />
            <p className="text-[#121316] font-normal text-base">
              Бүтээгдэхүүн нэмэх
            </p>
          </div>
        </div>
        <div className="py-8 px-8 flex gap-6 ">
          <div className="flex flex-col gap-6">
            <div className="bg-[#FFFFFF] rounded-xl h-[312px]">
              <div className="py-6 px-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-[#121316] font-semibold text-sm">
                    Бүтээгдэхүүний нэр
                  </Label>
                  <Input
                    type="text"
                    placeholder="Нэр"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[44px] text-black"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-[#121316] font-semibold text-sm">
                    Нэмэлт мэдээлэл
                  </Label>
                  <Textarea
                    value={addInfo}
                    onChange={(e) => setAddInfo(e.target.value)}
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="bg-[#F7F7F8] border-[#D6D8DB]  w-[515px] h-[72px] text-black"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-[#121316] font-semibold text-sm">
                    Барааны код
                  </Label>
                  <Input
                    type="text"
                    placeholder="#12345678"
                    value={barCode}
                    onChange={(e) => setBarCode(e.target.value)}
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
                    type="text"
                    placeholder="Үндсэн үнэ"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-[#F7F7F8] border-[#D6D8DB] h-[56px] w-[250px] text-black"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-[#121316] font-semibold text-sm">
                    Үлдэгдэл тоо ширхэг
                  </Label>
                  <Input
                    type="text"
                    placeholder="Үлдэгдэл тоо ширхэг"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="bg-[#F7F7F8] border-[#D6D8DB] h-[56px] w-[250px] text-black"
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
                    Ангилал нэмэх
                  </Label>
                  <div className="relative ">
                    <Input
                      type="text"
                      placeholder="нэмэх"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[56px] text-black"
                    />
                    <CircleCheck
                      onClick={addCategory}
                      className="absolute top-4 right-3 cursor-pointer"
                      color="black"
                    />
                  </div>

                  <Label className="text-[#121316] font-semibold text-sm">
                    Ангилал
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        role="combobox"
                        aria-expanded={open}
                        className="w-[515px] h-[56px] bg-[#F7F7F8] hover:bg-[#F7F7F8] text-black justify-between"
                      >
                        <span className="truncate">
                          {selectedCategory
                            ? selectedCategory
                            : "Ангилал сонгох"}
                        </span>
                        <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[515px] p-0">
                      <Command>
                        <CommandInput placeholder="Ангилал сонгох..." />
                        <CommandList>
                          <CommandEmpty>Ангилал олдсонгүй.</CommandEmpty>
                          <CommandGroup>
                            {categories.map((cat) => (
                              <CommandItem
                              key={cat._id}
                              onSelect={() => {
                                setSelectedCategory(cat.categoryName);
                                setOpen(false);
                              }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCategory === cat._id
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {cat.categoryName}
                              </CommandItem>
                            ))} 
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl ">
              <div className="py-6 px-6 flex flex-col gap-6">
                <div className="text-[#000000] font-semibold text-lg">
                  Төрөл
                </div>
                <div>
                  <div className="flex items-start gap-2">
                    <div className="text-black pr-6">Өнгө</div>

                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(color)} 
                        className={`${color} w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300`}
                      >
                        {selectedColors.includes(color) ? (
                          <Check className="text-white" size={16} />
                        ) : (
                          <Plus className="text-white" size={16} />
                        )}
                      </button>
                    ))}
                    
                  </div>

                  <div className="flex pt-2 items-center gap-2">
                    <div className="text-black">Хэмжээ</div>

                    {sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => handleSizeSelect(size)} 
                        className={`bg-gray-300 w-12 h-8 flex justify-center items-center rounded-full transition-all duration-300`}
                      >
                        {selectedSizes.includes(size) ? (
                          <Check className="text-black" size={16} />
                        ) : (
                          <span className="text-black font-semibold">
                            {size}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="border-[#D6D8DB] bg-[#FFFFFF] py-2 px-3 text-black border-[1px] w-[118px]">
                  Төрөл нэмэх
                </Button>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl h-[195px]">
              <div className="pt-6 pl-6">
                <h1 className="text-[#000000] text-lg font-semibold pb-2">Таг</h1>
                <Input
                  type="email"
                  id="email"
                  placeholder="Таг нэмэх..."
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="bg-[#F7F7F8] border-[#D6D8DB] w-[515px] h-[56px] pt-2 text-black"
                />
                <p className="text-[#5E6166] pt-2">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 pr-4 pl-[930px]">
          <Button className="bg-[#FFFFFF] text-black hover:bg-[#121316] hover:text-white w-[113px] h-[56px]">
            Ноорог
          </Button>
          <Button
            className="bg-[#FFFFFF]   text-black hover:bg-[#121316] hover:text-white  w-[113px] h-[56px]"
            onClick={createProduct}
          >
            Нийтлэх
          </Button>
        </div>
      </div>
    </div>
  );
}
