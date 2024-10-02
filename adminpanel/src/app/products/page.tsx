"use client";
import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../../../public/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../../public/ui/button";
import { Input } from "../../../public/ui/input";
import {
  Calendar,
  ChevronDown,
  DollarSign,
  Pencil,
  Plus,
  Search,
  SearchCheck,
  Shapes,
  Trash,
} from "lucide-react";
import Link from "next/link";
import LeftBar from "@/components/leftBar";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

interface Products {
  name: string;
  barCode: string;
  uploadedPhotos: string[];
  price: number;
  qty: number;
  category: string;
  sold: number;
  createdAt: string;
}
const formatDateISO = (createdAt: string) => {
  const date = new Date(createdAt);
  return date.toISOString().slice(0, 10);
};

export default function Products() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex ">
      <LeftBar />
      <Tabs defaultValue="products" className="w-[1170px]">
        {/* 2 */}
        <TabsList className="flex ">
          <TabsTrigger
            value="products"
            className="hover:text-[#121316] text-[#3F4145] hover:font-semibold font-thin text-sm hover:border-b-black hover:border-b-2 py-4 px-4"
          >
            Бүтээгдэхүүн
          </TabsTrigger>
          <TabsTrigger
            value="sort"
            className="hover:text-[#121316] text-[#3F4145] hover:font-semibold font-thin text-sm hover:border-b-black hover:border-b-2 py-4 px-4"
          >
            Ангилал
          </TabsTrigger>
        </TabsList>
        {/* add button */}
        <Link href="/addproduct">
          <Button variant="default" className=" my-6 mx-6 font-bold py-3 px-10">
            <Plus className="mr-2" size={14} />
            Бүтээгдэхүүн нэмэх
          </Button>
        </Link>
        {/* 3+search */}
        <div className="flex justify-between px-6">
          <div className="flex gap-[13px]">
            <Button
              variant="ghost"
              className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
            >
              <Shapes size={24} className="pr-2" /> Ангилал{" "}
              <ChevronDown className="ml-2" size={20} />
            </Button>
            <Button
              variant="ghost"
              className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
            >
              {" "}
              <DollarSign size={24} className="pr-2" /> Үнэ{" "}
              <ChevronDown className="ml-2 " size={20} />
            </Button>
            <Button
              variant="ghost"
              className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
            >
              <Calendar size={24} className="pr-2" />
              Сараар <ChevronDown className="ml-2 " size={20} />
            </Button>
          </div>
          <div className="relative">
            <Input
              placeholder="          Бүтээгдэхүүний нэр , SKU UPC"
              type="search"
              className=" w-[419px] h-[40px] bg-[#FFFFFF] rounded-lg border-[#ECEDF0] border-[1px]"
            ></Input>
            <SearchCheck
              color="black"
              size={18}
              className="absolute top-2 left-5"
            />
          </div>
        </div>
        <TabsContent
          value="products"
          className="text-center mt-4 mx-6 text-black bg-[#FFFFFF] border-[#ECEDF0] border-[1px] "
        >
          <Table className="text-color rounded-2xl">
            <TableHeader className="bg-[#FFFFFF] rounded-xl">
              <TableRow className="text-center h-11 rounded-xl">
                <TableHead className="text-center   rounded-xl font-semibold text-[#3F4145]"></TableHead>
                <TableHead className="text-center   rounded-xl font-semibold text-[#3F4145]">
                  Бүтээгдэхүүн
                </TableHead>
                <TableHead className="text-center  font-semibold text-[#3F4145]">
                  Ангилал
                </TableHead>
                <TableHead className="text-center font-semibold text-[#3F4145]">
                  Үнэ
                </TableHead>
                <TableHead className="text-center  font-semibold text-[#3F4145]">
                  Үлдэгдэл
                </TableHead>
                <TableHead className="text-center  font-semibold text-[#3F4145]">
                  Зарагдсан
                </TableHead>
                <TableHead className="text-center  font-semibold text-[#3F4145]">
                  Нэмсэн огноо
                </TableHead>
                <TableHead className="text-center font-semibold text-[#3F4145]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[#FFFFFF]">
              {products.map((products) => (
                <TableRow className="text-black ">
                  <TableCell className="text-center h-8 text-pink ">
                    <Checkbox id="terms1" />
                  </TableCell>
                  <TableCell className="text-center h-8 text-pink ">
                    <div className="flex gap-3 ">
                        <Image alt="img" src={products.uploadedPhotos[0]} width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                      <div>
                        <div className="text-start text-[#121316] font-semibold text-sm">{products.name}</div>
                        <div className="pt-0.5 text-[#5E6166] text-xs font-normal">{products.barCode}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {products.category}
                  </TableCell>
                  <TableCell>{products.price}</TableCell>
                  <TableCell className="text-center text-black ">
                    {products.qty}
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {products.sold}
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {formatDateISO(products.createdAt)}
                  </TableCell>

                  <TableCell className=" flex text-black ">
                    <Trash
                      className="mr-4 items-center"
                      size={16}
                      strokeWidth={1.5}
                    />
                    <Pencil
                      className="items-center"
                      size={16}
                      strokeWidth={1.5}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="sort"></TabsContent>
      </Tabs>
    </div>
  );
}
