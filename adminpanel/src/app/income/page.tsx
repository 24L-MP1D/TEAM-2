import LeftBar from "@/components/leftBar";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Download } from "lucide-react";
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

import { Input } from "../../../public/ui/input";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Income() {
  return (
    <div className="flex">
      <LeftBar />

      <div className="mx-auto mt-4">
        <div className="bg-[#FFFFFF] w-[724px] rounded-xl ">
          <div className=" flex justify-between py-6 px-6">
            <h1 className="text-[#121316] font-bold text-xl">Орлого</h1>
            <Button className="bg-[#1C20240A] rounded-md py-2 px-3 text-[#121316] text-sm font-semibold">
              <Download size={20} className="pr-2" color="#121316" />
              Хуулга татах
            </Button>
          </div>

          <div className="border-t-[1px] border-[#D6D8DB] ">
            <div className="py-6 px-6 flex justify-between">
              <h1 className="text-[#121316] font-bold text-xl">235,000₮</h1>
              <div className="flex gap-2">
                <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51]">
                  Өнөөдөр
                </Button>
                <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51]">7 хоног</Button>
                <Button
                  variant="ghost"
                  className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
                  // onClick={() =>
                  //   setOpenDropdown(openDropdown === "month" ? null : "month")
                  // }
                >
                  <Calendar size={24} className="pr-2" />
                  Сараар <ChevronDown className="ml-2 " size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] w-[724px] rounded-xl mt-2">
          <Table className="border-[#ECEDF0] border-[1px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[169px] text-[#3F4145] font-semibold text-xs text-center">
                  Захиалгын ID дугаар
                </TableHead>
                <TableHead className="w-[268px] text-[#3F4145] font-semibold text-xs">
                  Захиалагч
                </TableHead>
                <TableHead className="w-[137px] text-[#3F4145] font-semibold text-xs">
                  Төлбөр
                </TableHead>
                <TableHead className="w-[150px] text-center  text-[#3F4145] font-semibold text-xs">
                  {" "}
                  Огноо
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="text-sm text-center text-[#121316] font-semibold">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className="text-[#121316] text-sm font-normal">
                    {invoice.paymentStatus}
                  </TableCell>
                  <TableCell className="  text-[#121316] text-sm font-normal">
                    {invoice.paymentMethod}
                  </TableCell>
                  <TableCell className="text-center text-[#121316] text-sm font-normal">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          )
        </div>
      </div>
    </div>
  );
}
