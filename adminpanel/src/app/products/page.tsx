"use client"
import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../../../public/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../../public/ui/button";
import { Input } from "../../../public/ui/input";
import { ChevronDown, Pencil, Plus, Search, SearchCheck, Trash } from "lucide-react";
import Link from "next/link";
import LeftBar from "@/components/leftBar";
import React, { useEffect, useState } from "react";

type Products = {
    id: number;
    name: string;
    addInformation: string;
    price: number;
    remaining: string;
    sold: string;
    addedDate: string;
}
export default function Products() {
    const [products, setProducts] = useState<Products[]>([])
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))

    }, [])

    function handleDelete(id: number) {

        const productToDelete = products.find(product => product.id === id);
        if(productToDelete){
            fetch(`http://localhost:4000/products/${id}`,{
                method: 'DELETE',
            })
            .then(response => {
                if(response.ok){
                    const newList = products.filter(products => products.id !== id);
                    setProducts(newList);
                } else { console.error('failed to delete');
                }
            })
            .catch(err=> console.log(err));
        }
    }
    return (
        <div className="flex">
            <LeftBar />
            <Tabs defaultValue="products" className="w-[1200px] bg-white">
                <TabsList className="grid max-w-full grid-cols-2">
                    <TabsTrigger value="products">Бүтээгдэхүүн</TabsTrigger>
                    <TabsTrigger value="sort">Ангилал</TabsTrigger>
                </TabsList>
                <Link href="/addproduct">
                    <Button variant="default" className="ml-[100px] my-8 font-bold" >
                        <Plus className="mr-2" size={16} strokeWidth={1.5} />
                        Бүтээгдэхүүн нэмэх
                    </Button>
                </Link>
                <div className="flex justify-between ml-[100px] my-4">
                    <div className="flex justify-space-between flex-1">
                        <Button variant="ghost" className="font-bold" >Ангилал
                            <ChevronDown className="ml-2 w-[18px] align-items-center" />
                        </Button>
                        <Button variant="ghost" className="font-bold" >
                            Үнэ  <ChevronDown className="ml-2 w-[18px] align-items-center" />
                        </Button>
                        <Button variant="ghost" className="font-bold" >Сараар <ChevronDown className="ml-2 w-[18px] align-items-center" /></Button>
                    </div>
                    <Input placeholder="Бүтээгдэхүүний нэр , SKU UPC" type="search" className="flex-1" ></Input>
                </div>
                <TabsContent value="products" className="text-center ml-[100px] text-black">
                    <Table className="text-color">
                        <TableHeader>
                            <TableRow className="text-center h-16">
                                <TableHead className="text-center  font-bold">Бүтээгдэхүүн</TableHead>
                                <TableHead className="text-center font-bold">Ангилал</TableHead>
                                <TableHead className="text-center font-bold">Үнэ</TableHead>
                                <TableHead className="text-center font-bold">Үлдэгдэл</TableHead>
                                <TableHead className="text-center font-bold">Зарагдсан</TableHead>
                                <TableHead className="text-center font-bold">Нэмсэн огноо</TableHead>
                                <TableHead className="text-center font-bold"> bugggg</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody >
                            {products.map((products) => (
                                <TableRow key={products.id} className="text-black ">
                                    <TableCell className="text-center h-8 text-pink ">{products.name}</TableCell>
                                    <TableCell className="text-center text-black ">{products.addInformation}</TableCell>
                                    <TableCell>{products.price}</TableCell>
                                    <TableCell className="text-center text-black ">{products.remaining}</TableCell>
                                    <TableCell className="text-center text-black ">{products.sold}</TableCell>
                                    <TableCell className="text-center text-black ">{products.addedDate}</TableCell>
                                    <TableCell className=" flex text-black ">
                                        <Button className="mr-3" onClick={() => handleDelete(products.name)}>
                                            <Trash className=" items-center" size={16} strokeWidth={1.5} />
                                        </Button>
                                        <Button>
                                            <Pencil className="items-center" size={16} strokeWidth={1.5} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="sort">

                </TabsContent>
            </Tabs>
        </div>
    )
    }