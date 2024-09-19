"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col  ">
      <div className="flxe-1 bg-slate-200">
        <Link className="">
          <Button>Бүтээгдэхүүн</Button>
        </Link>
      </div>
      <div className="flex-1 bg-slate-300">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Захиалгын дугаар</th>
              <th>Үйлчлүүлэгч</th>
              <th>Огноо</th>
              <th>Цаг</th>
              <th>Төлбөр</th>
              <th>Статус</th>
              <th>Дэлгэрэнгүй</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
