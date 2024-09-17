<<<<<<< HEAD
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";




export default function Searcharea() {

  return (

    <div >
      <Popover >
        <PopoverTrigger>
          SEARCH
        </PopoverTrigger>
        <PopoverContent className="border-1 w-[610px]">
        {clothes.map((clothes) => (
        <div key={clothes.name} className="">
            <div className="grid grid-cols-2 rounded border-1">
              <div>{clothes.image}</div>
              <div className="ml-0">
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




=======
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "./ui/input";

export default function Searcharea() {
  return (
    <div className="w-[610px] bg-white">
      {clothes.map((clothes) => (
        <Popover>
          <Input type="search"></Input>
          <PopoverTrigger>search</PopoverTrigger>
          <PopoverContent className="col-span-2">
            <img className="span-1 border-sm "></img>
            <p className="font-bold">{clothes.name}</p> {clothes.price}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
>>>>>>> 6d2607e (folder)
const clothes = [
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
<<<<<<< HEAD
    Image: "/public/image.png"

  },
  {
    name: "Chunky Glyph gsr5",
    price: 120.0,
    image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png"

  },
  {
    name: "Chunky Glyph ergs",
    price: 120.0,
    image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png"

  },
  {
    name: "Chunky Glyph ergs",
    price: 120.0,
    image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png"

=======
  },
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
  },
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
>>>>>>> 6d2607e (folder)
  },
];
