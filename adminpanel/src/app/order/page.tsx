
"use client"

import LeftBar from "@/components/leftBar";
import { Button } from "@/components/ui/button";
import { Input } from "../../../public/ui/input";
import { Calendar, ChevronDown, SearchCode } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  userName: string;
  createdAt: string;
  prices: number[];
  userId:string,
  userEmail:string,
}

export default function Order() {
  const [orders, setOrders] = useState<Order[]>([]);


  useEffect(() => {
    fetch(`http://localhost:4000/orders`)
      .then((res) => res.json())
      .then((data: Order[]) => {
        setOrders(data);
      });
  }, []);




  // useEffect(() => {
  //   fetch(`http://localhost:4000/user/${userId}`)
  //     .then((res) => res.json())
  //     .then((data: Order[]) => {
  //       setOrders(data);
  //     });
  // }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`,
    };
  };

  return (
    <div className="flex ">
      <LeftBar />
      <div className="w-[1170px]">
        <div className="flex ">
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Бүгд
          </Button>
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Шинэ захиалага
          </Button>
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Бэлтгэгдэж байна
          </Button>
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Хүргэлтэнд гарсан
          </Button>
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Хүргэгдсэн
          </Button>
          <Button className="py-5 px-4 text-[#3F4145] hover:text-[#121316] hover:font-semibold font-normal text-sm bg-[#F7F7F8] hover:bg-[#F7F7F8] hover:border-b-[#121316] hover:border-b-2 rounded-none shadow-none">
            Цуцлагдсан
          </Button>
        </div>
        <div className="py-[34px] px-6">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51] font-semibold">
                Өнөөдөр
              </Button>
              <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51] font-semibold">
                7 хоног
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
                >
                  <Calendar size={24} className="pr-2" />
                  Сараар <ChevronDown className="ml-2 " size={20} />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#FFFFFF] border-[#D6D8DB] border-[1px] rounded-md">
                <div className="py-1 px-2 flex gap-1">
                  <SearchCode color="black" size={22} />
                  <Input
                    type="search"
                    className="w-[250px] h-[20px] border-none hover:border-none focus:border-none text-black"
                    placeholder="Дугаар, Имэйл"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="bg-[#FFFFFF] rounded-lg">
              <div className="py-5 px-6 text-[#121316] font-bold text-xl">
                Захиалга
              </div>
              <Table className="border-[#ECEDF0] border-[1px]">
                <TableHeader className="bg-[#ECEDF0] rounded-none">
                  <TableRow className="rounded-none">
                    <TableHead className="w-[169px] text-[#3F4145] font-semibold text-xs text-center">
                      Захиалгын ID дугаар
                    </TableHead>
                    <TableHead className="w-[268px] text-[#3F4145] font-semibold text-xs">
                      Үйлчлүүлэгч
                    </TableHead>
                    <TableHead className="w-[137px] text-[#3F4145] font-semibold text-xs">
                      Огноо
                    </TableHead>
                    <TableHead className="w-[137px] text-[#3F4145] font-semibold text-xs">
                      Цаг
                    </TableHead>
                    <TableHead className="w-[137px] text-[#3F4145] font-semibold text-xs">
                      Төлбөр
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-[]">
                  {orders?.map((order) => {
                    const { date, time } = formatDate(order.createdAt);
                    return (
                      <TableRow key={order._id}>
                        <TableCell className="text-sm text-center text-[#121316] font-semibold py-6 px-6">
                          #{order._id.substring(0,7)}
                        </TableCell>
                        <TableCell className="text-[#121316] text-sm font-normal">
                          <div>
                          {order.userName}
                          {order.userEmail}
                          </div>
                         

                        </TableCell>
                        <TableCell className="text-[#121316] text-sm font-normal">
                          {date} {/* Displaying separate date */}
                        </TableCell>
                        <TableCell className=" text-[#121316] text-sm font-normal">
                          {time} {/* Displaying separate time */}
                        </TableCell>
                        <TableCell className=" text-[#121316] text-sm font-normal">
                          {200000}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
