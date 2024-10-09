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
  SearchCode,
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
import { date } from "yup";
import { start } from "repl";

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

interface prices {
  price: string;
}
const formatDateISO = (createdAt: string) => {

  const date = new Date(createdAt);
  return date.toISOString().slice(0, 10);
};

export default function Products(id: string) {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [openDropdown, setOpenDropdown] = useState<String | null>(null);

  const [filterCategory, setFilterCategory] = useState<
    Filteredproducts[] | null
  >([]);

  const [lowPrice, setLowPrice] = useState<string>("");
  const [highPrice, setHighPrice] = useState<string>("");
  const [startMonth, setStartMonth] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");
  const [search, setSearch] = useState<string>("");

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

  const filterbyCategory = async (categoryName: string) => {
    console.log("showing category");
    const res = await fetch(
      `http://localhost:4000/productsfilteredby?categoryName=${categoryName}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setProducts(data);
      // setOpenDropdown(openDropdown)

      console.log("Successfully filtered by the category:", categoryName);
    } else {
      console.log("Error occurred while filtering the products");
    }
  };

  const filterbyPrice = async () => {
    const res = await fetch(
      `http://localhost:4000/productsfilteredbyprice?lowPrice=${lowPrice}&highPrice=${highPrice}`
    );
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProducts(data);
      console.log("Successfully filtered by the price:", lowPrice);
    } else {
      console.log("Error occurred while filtering the products by price");
    }
  };

  const filterbyMonth = async () => {
  let isoStartdate;
  let isoEnddate;
  
  if(startMonth && endMonth){
    const isoStartdate = new Date(startMonth).toISOString();
    const isoEnddate = new Date(endMonth).toISOString();
    
  }


    console.log(isoEnddate);
    const res = await fetch(
      `http://localhost:4000/productsfilteredbyMonth?startMonth=${isoStartdate}&endMonth=${isoEnddate}`
    );
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProducts(data);

      console.log("Successfully filtered by the month:", startMonth, endMonth);
    } else {
      console.log("error occured while filtering the products by month");
    }
  };

  const filterbySearch = async () => {
    console.log(search);
    const res = await fetch(`
      http://localhost:4000/productsfilteredbySearch?search=${search}
      `);
    if (res.status === 200) {
      const data = await res.json();
      setProducts(data);
      console.log("Successfully filtered by the search:", search);
    } else {
      console.log("error occured while filtering the product by search");
    }
  };
    useEffect(()=>{
      filterbyPrice()
      
    },[highPrice])

    useEffect(()=>{
      filterbySearch()
      filterbyMonth()

      
    },[search, endMonth])

   
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
                <div className="bg-white hover:bg-white w-[140px] text-black flex flex-col  cursor-pointer absolute z-50     rounded-md ">
                  {categories.length > 0 &&
                    categories.map((cat) => (
                      <Button
                        onClick={() => filterbyCategory(cat.categoryName)}
                        className="bg-white rounded-md text-black hover:text-white flex py-2 px-3 border-gray-200 border-[1px]"
                      >
                        {cat.categoryName}
                      </Button>
                    ))}
                </div>
              )}
            </div>

            <div>
              <Button
                variant="ghost"
                className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]   "
                onClick={() =>
                  setOpenDropdown(openDropdown === "price" ? null : "price")
                }
              >
                {" "}
                <DollarSign size={24} className="pr-2" /> Үнэ{" "}
                <ChevronDown className="ml-2 " size={20} />
              </Button>
              {openDropdown === "price" && (
                <div className="absolute  ">
                  <div className="bg-white hover:bg-white text-black flex flex-col  cursor-pointer absolute z-50  w-[100px] rounded-md">
                    <Input
                      className="bg-white text-black"
                      placeholder="Доод үнэ оруулна уу"
                      value={lowPrice}
                      onChange={(e) => setLowPrice(e.target.value)}
                    />
                    <Input
                      className="bg-white text-black "
                      placeholder="Дээд үнэ оруулна уу "
                      value={highPrice}
                      onChange={(e) => setHighPrice(e.target.value)}
                    />
                   
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
            
                <Button
                  variant="ghost"
                  className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "month" ? null : "month")
                  }
                >
                  <Calendar size={24} className="pr-2" />
                  Сараар <ChevronDown className="ml-2 " size={20} />
                </Button>


              {openDropdown === "month" && (
                <div className="absolute z-50 bg-white hover:bg-white rounded-md">
                  <Input
                    type="date"
                    className="text-black"
                    value={startMonth}
                    onChange={(e) => setStartMonth(e.target.value)}
                  ></Input>
                  <Input
                    type="date"
                    className="text-black"
                    value={endMonth}
                    onChange={(e) => setEndMonth(e.target.value)}
                  ></Input>
                 
                </div>
              )}
            </div>
          </div>
          <div className="relative">

        
            <div className="bg-[#FFFFFF] border-[#D6D8DB] border-[1px] rounded-lg">
            <div className="py-2 px-2 flex ">
              <SearchCode color="black " size={24} />
              <Input type="search" className=" w-[250px] h-[20px] border-none hover:border-none focus:border-none text-black" placeholder="Бүтээгдэхүүний нэр , SKU UPC"     value={search}
              onChange={(e) => setSearch(e.target.value)}/>
            </div>
          </div>
            {/* <SearchCheck
              color="black"
              size={18}
              className="absolute top-2 left-3/4"
            /> */}
           
          </div>
        </div>
        <TabsContent
          value="products"
          className="text-center mt-4 mx-6 text-black bg-[#FFFFFF] rounded-2xl border-[#ECEDF0] border-[1px] "
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
