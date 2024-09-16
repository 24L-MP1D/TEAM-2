import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";

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

const clothes = [
  {
    name: "Chunky Glyph Tee",
    price: 120.0,
    Image: "./public/image.png"

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

  },
];
