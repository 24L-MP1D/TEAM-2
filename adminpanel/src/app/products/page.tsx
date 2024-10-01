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
import AddProduct from "../addproduct/page";
import { useSearchParams } from "next/navigation";

interface Products {
  _id: string;
  name: string;
  barCode: string;
  uploadedPhotos: string[];
  price: number;
  qty: number;
  category: string;
  sold: number;
  createdAt: string;
}

interface Filteredproducts {
  _id: string;
  name: string;
  barCode: string;
  uploadedPhotos: string[];
  price: number;
  qty: number;
  category: string;
  sold: number;
  createdAt: string;
}
interface Categories {
  _id: string;
  categoryName: string;
}
const formatDateISO = (createdAt: string) => {
  const date = new Date(createdAt);
  return date.toISOString().slice(0, 10);
};

export default function Products(id: string) {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [openDropdown, setOpenDropdown] = useState<String | null>(null);
  const [filterCategory, setFilterCategory] = useState<
    Filteredproducts[] | null
  >([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id: string) => {
    console.log("deleting product with id:", id);
    fetch(`http://localhost:4000/product/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setProducts(products.filter((product) => product._id !== id));
        console.log("Successfully deleted the product");
      } else {
        console.log("error happened during the deleting");
      }
    });
  };

  const filterbyCategory = async (id: string) => {
    console.log("showing category");
    await fetch(`http://localhost:4000/products/${id}`,{

    }).then((res)=>{
      console.log(res);
      if(res.status===200){
        setProducts(products);
        console.log("successfully filtered by the category");
      }else{
        console.log("error happened during filter by the product")
      }
    })
      
  };

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
            <div className="relative">
              <Button
                variant="ghost"
                className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px] "
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "category" ? null : "category"
                  )
                }
              >
                <Shapes size={24} className="pr-2" /> Ангилал
                <ChevronDown className="ml-2" size={20} />
              </Button>
              {openDropdown === "category" && (
                <div className="bg-white text-black flex flex-col gap-4 hover:bg-gray-200 cursor-pointer absolute z-50 left-5 border-gray-400 border-[1px] w-[160px] text-center rounded-md">
                  {categories.length > 0 &&
                    categories.map((cat) => (
                      <Button
                        onClick={() => filterbyCategory(cat._id)}
                        className="bg-[#a6a4a1] rounded-md text-black hover:text-white"
                      >
                        {cat.categoryName}
                      </Button>
                    ))}
                </div>
              )}
            </div>

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
              {products.map((product) => (
                <TableRow className="text-black ">
                  <TableCell className="text-center h-8 text-pink ">
                    <Checkbox id="terms1" />
                  </TableCell>
                  <TableCell className="text-center h-8 text-pink ">
                    <div className="flex gap-3 ">
                      <Image
                        alt="img"
                        src={product.uploadedPhotos[0]}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-start text-[#121316] font-semibold text-sm w-[57px] h-[16px] overflow-hidden">
                          {product.name}
                        </div>
                        <div className="pt-0.5 text-[#5E6166] text-xs font-normal">
                          {product.barCode}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {product.category}
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-center text-black ">
                    {product.qty}
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {product.sold}
                  </TableCell>
                  <TableCell className="text-center text-black ">
                    {formatDateISO(product.createdAt)}
                  </TableCell>

                  <TableCell className=" flex text-black ">
                    <Trash
                      className="mr-4 items-center"
                      size={16}
                      strokeWidth={1.5}
                      onClick={() => {
                        console.log("deleted", product._id);
                        deleteProduct(product._id);
                      }}
                    />

                    <Link href={`/addproduct?id=${product._id}`}>
                      <Pencil
                        className="items-center"
                        size={16}
                        strokeWidth={1.5}
                      />
                    </Link>
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
