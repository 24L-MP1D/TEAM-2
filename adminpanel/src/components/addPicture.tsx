"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { BadgePlus, ImagePlus, ImageUp, Plus } from "lucide-react";

export default function AddPicture({
  onChange,
}: {
  onChange: (imageUrl: string) => void;
}) {

  const [loading, setLoading]=useState(false);
  const [files, setFiles]=useState<FileList | null>(null);
  const imageUrls: string[]=[];

  Array.from(files ?? []).forEach((file)=>{
    const imageUrl=URL.createObjectURL(file);
    console.log(imageUrl);
    imageUrls.push(imageUrl)
  })

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) {
      console.log(files)
      setFiles(files);
    }
  };

  const handleUpload = async () => {
    if (!imageUrls) return;

    const formData = new FormData();
    // formData.append("image", imageUrls);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("uploaded:", data);

      onChange(data.secure_url);

      setLoading(false);
    } catch (error) {
      console.error("error uploading file:", error);
    }
  };

  return (
    <div className="flex gap-3 pt-4 ">
      <div className=" relative pt-8">
        <BadgePlus color="black" size={30} className="absolute z-10 my-auto" />
        <Input
          className=" bg-inherit opacity-0 absolute z-20"
          type="file"
          onChange={handleFileChange}
          onClick={handleUpload}
        />
      </div>
    </div>
  );
}
