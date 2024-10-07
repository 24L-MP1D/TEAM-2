"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { BadgePlus, ImagePlus, ImageUp, Plus } from "lucide-react";
import { Label } from "@radix-ui/react-label";

export default function AddPicture({
  files,
  onFilesChange,
}: {
  files: FileList[],
  onFilesChange: (file:FileList[] ) => void
}) {
  const [images, setImages] = useState<string[]>([])
    const [hidden, setHidden] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageUrls: string[] = []
    const newFiles = event.currentTarget.files
    Array.from(newFiles ?? []).forEach((file) => {
        const imageUrl = URL.createObjectURL(file)
        imageUrls.push(imageUrl)
    })
    setImages(s => [...s, ...imageUrls]);

    if (newFiles) {
      onFilesChange([...files, newFiles]);
    }
}



  return (
    <div className="flex gap-3 pt-4 ">
      <div className=" relative pt-8">
        <BadgePlus color="black" size={30} className="absolute z-10 my-auto" />
        <Label htmlFor="images"></Label>
        <Input
          multiple
          id="images"
          className=" bg-inherit opacity-0 absolute z-20"
          type="file"
          onChange={handleFileChange}
          // onClick={handleUpload}
        />
      </div>
    </div>
  );
}
