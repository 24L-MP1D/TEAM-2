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
const clothes = [
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
  },
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
  },
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
  },
];
