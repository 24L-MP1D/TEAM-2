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
export default function Order() {
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

          <div></div>
        </div>
        <div className="py-[34px] px-6">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51] font-semibold	">
                Өнөөдөр
              </Button>
              <Button className="border-[#ECEDF0] bg-[#FFFFFF] text-[#3F4145] hover:text-[#FFFFFF] py-[10px] px-4 hover:bg-[#18BA51] font-semibold	">
                7 хоног
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  className="font-bold text-black bg-[#FFFFFF] py-2 px-3 rounded-lg border-[#ECEDF0] border-[1px]"
                  //   onClick={() =>
                  //     setOpenDropdown(openDropdown === "month" ? null : "month")
                  //   }
                >
                  <Calendar size={24} className="pr-2" />
                  Сараар <ChevronDown className="ml-2 " size={20} />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#FFFFFF] border-[#D6D8DB] border-[1px] rounded-md">
                <div className="py-1 px-2 flex gap-1 ">
                  <SearchCode color="black " size={22} />
                  <Input
                    type="search"
                    className=" w-[250px] h-[20px] border-none hover:border-none focus:border-none text-black"
                    placeholder="Дугаар, Имэйл"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className=" bg-[#FFFFFF] rounded-lg">
              <div className="py-5 px-6 text-[#121316] font-bold text-xl ">
                Захиалга
              </div>
              <Table className="border-[#ECEDF0] border-[1px]">
                <TableHeader className="bg-[#ECEDF0] rounded-none">
                  <TableRow className="rounded-none">
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
                <TableBody className="bg-[]">
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="text-sm text-center text-[#121316] font-semibold py-6  px-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
