import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../../../public/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../../public/ui/button";
import { Input } from "../../../public/ui/input";
import { ChevronDown, Pencil, Plus, Search, SearchCheck, Trash } from "lucide-react";


export function Products() {
    const invoices = [
        {
            бүтээгдэхүүн: "эмэгтэй цүнх",
            Ангилал: "Paid",
            Үнэ: "$250.00",
            Үлдэгдэл: "30",
            Зарагдсан: "30",
            Нэмсэногноо: "2024.01.10",
        },
        {
            бүтээгдэхүүн: "гутал",
            Ангилал: "Paid",
            Үнэ: "$250.00",
            Үлдэгдэл: "20",
            Зарагдсан: "30",
            Нэмсэногноо: "2024.01.10",
        },
        {
            бүтээгдэхүүн: "INV001",
            Ангилал: "Paid",
            Үнэ: "$250.00",
            Үлдэгдэл: "10",
            Зарагдсан: "30",
            Нэмсэногноо: "2024.01.10",
        },
        {
            бүтээгдэхүүн: "INV001",
            Ангилал: "Paid",
            Үнэ: "$250.00",
            Үлдэгдэл: "9",
            Зарагдсан: "30",
            Нэмсэногноо: "2024.01.10",
        },
    ]
    return (
        <Tabs defaultValue="products" className="w-[1200px] bg-white">
            <TabsList className="grid max-w-full grid-cols-2">
                <TabsTrigger value="products">Бүтээгдэхүүн</TabsTrigger>
                <TabsTrigger value="sort">Ангилал</TabsTrigger>
            </TabsList>
            <Button variant="default" className="ml-[100px] my-8 font-bold" > <Plus className="mr-2" size={16} strokeWidth={1.5} />
                Бүтээгдэхүүн нэмэх </Button>
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
                <Input placeholder="Бүтээгдэхүүний нэр , SKU UPC" type="search" className="flex-1" >

                </Input>
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
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.Үлдэгдэл} className="text-black ">
                                {/* <TableCell className="text-center h-8">
                                </TableCell> */}
                                <TableCell className="text-center h-8 text-pink ">{invoice.бүтээгдэхүүн}</TableCell>
                                <TableCell className="text-center text-black ">{invoice.Ангилал}</TableCell>
                                <TableCell>{invoice.Үнэ}</TableCell>
                                <TableCell className="text-center text-black ">{invoice.Үлдэгдэл}</TableCell>
                                <TableCell className="text-center text-black ">{invoice.Зарагдсан}</TableCell>
                                <TableCell className="text-center text-black ">{invoice.Нэмсэногноо}</TableCell>
                                <TableCell className=" flex text-black ">
                                    <Trash className="mr-4 items-center" size={16} strokeWidth={1.5} />
                                    <Pencil className="items-center" size={16} strokeWidth={1.5} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TabsContent>
            <TabsContent value="sort">

            </TabsContent>
        </Tabs>
    )
}
