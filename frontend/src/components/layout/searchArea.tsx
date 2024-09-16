import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "./ui/input";
import Image from "next/image";

export default function Searcharea() {
  return (

    <div className="">
      <Popover >
        <PopoverTrigger>
          SEARCH
        </PopoverTrigger>
        <PopoverContent className="border-1 w-[610px]">
        {clothes.map((clothes) => (
        <div key={clothes.name} className="">
            <div className="grid grid-cols-2 rounded border-1 gap-0">
              <div>{clothes.Image}</div>
              <div className="">
                <p className="font-bold ">{clothes.name}</p>
                <p className="">{clothes.price}</p>
              </div>
            </div>
        </div>
      ))}
        </PopoverContent>
      </Popover>
      
    </div>
  );
}

const clothes = [
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
    Image: "./public/image.png"

  },
  {
    name: "Chunky Glyph gsr5",
    price: 120.0,
    
  },
  {
    name: "Chunky Glyph ergs",
    price: 120.0,
   

  },
  {
    name: "Chunky Glyph ergs",
    price: 120.0,


  },
];
