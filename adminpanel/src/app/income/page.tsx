"use client";
import { useEffect, useState } from "react";
import LeftBar from "@/components/leftBar";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../../../public/ui/input";

// Define Order interface
interface Order {
  _id: string;
  userName: string;
  paid: number;
  date: string; // Use string for dates fetched from an API for easy formatting
}


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

export default function Income() {
  const [incomes, setIncomes] = useState<Order[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    fetch("http://localhost:4000/income")
      .then((res) => res.json())
      .then((data: Order[]) => {
        setIncomes(data);
      });
  }, []);

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <LeftBar />

      {/* Main Content */}
      <div className="mx-auto mt-4 w-full lg:w-[724px]">
        <div className="bg-white w-full rounded-xl shadow-lg">
          <div className="flex justify-between py-6 px-6">
            <h1 className="text-[#121316] font-bold text-xl">Орлого</h1>
            <Button className="bg-[#1C20240A] rounded-md py-2 px-3 text-[#121316] text-sm font-semibold">
              <Download size={20} className="pr-2" color="#121316" />
              Хуулга татах
            </Button>
          </div>

          {/* Summary Section */}
          <div className="border-t-[1px] border-[#D6D8DB]">
            <div className="py-6 px-6 flex justify-between">
              <h1 className="text-[#121316] font-bold text-xl">235,000₮</h1>
              <div className="flex gap-2">
                <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51]">
                  Өнөөдөр
                </Button>
                <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51]">
                  7 хоног
                </Button>
                <Button
                  variant="ghost"
                  className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
                >
                  <Calendar size={24} className="pr-2" />
                  Сараар <ChevronDown className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Income Table */}
        <div className="bg-white w-full rounded-xl mt-4 shadow-lg">
          <Table className="border-[#ECEDF0] border-[1px]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-[#3F4145] font-semibold text-xs">
                  Захиалгын ID дугаар
                </TableHead>
                <TableHead className="text-[#3F4145] font-semibold text-xs">
                  Захиалагч
                </TableHead>
                <TableHead className="text-[#3F4145] font-semibold text-xs">
                  Төлбөр
                </TableHead>
                <TableHead className="text-center text-[#3F4145] font-semibold text-xs">
                  Огноо
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incomes.length > 0 ? (
                incomes.map((income) => (
                  <TableRow key={income._id}>
                    <TableCell className="text-sm text-center text-[#121316] font-semibold">
                      {income._id}
                    </TableCell>
                    <TableCell className="text-[#121316] text-sm font-normal">
                      {income.userName}
                    </TableCell>
                    <TableCell className="text-[#121316] text-sm font-normal">
                      {2000000}₮
                    </TableCell>
                    <TableCell className="text-center text-[#121316] text-sm font-normal">
                      {2024-5-10}

                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4">
                    No income data available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell className="font-bold">Нийт дүн:</TableCell>
                <TableCell className="text-right font-bold">
                  {incomes.reduce((acc, curr) => acc + curr.paid, 0).toLocaleString("mn-MN")}₮
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
