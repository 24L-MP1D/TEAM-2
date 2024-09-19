"use client";



import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Dashboard() {
  return (
    <div className="flex flex-row mt-20">
      <div className="flex flex-col bg-slate-200 w-[200px]">
        <Link className="mt-2 mb-2" href="/dashboard">
          <Button variant="default" className="text-white">
            Хяналтын самбар
          </Button>
        </Link>
        <Link className="mt-2 mb-2" href="/dashboard">
          <Button variant="default" className="text-white">
            Захиалга
          </Button>
        </Link>
        <Link className="mt-2 mb-2" href="/dashboard">
          <Button variant="default" className="text-white">
            Орлого
          </Button>
        </Link>
        <Link className="mt-2 mb-2" href="/dashboard">
          <Button variant="default" className="text-white">
            Бүтээгдэхүүн
          </Button>
        </Link>
        <Link className="mt-2 mb-2" href="/dashboard">
          <Button variant="default" className="text-white">
            Тохиргоо
          </Button>
        </Link>
      </div>

      <div className="flxe-1 bg-slate-200  mr-20">

      </div>
      <div className="flex-1 bg-slate-300">
        <table className="table-auto table-fixed border-2-gray border border-slate-400 ">
          <thead className="">
            <tr className="">
              <th className="w-[200px] h-[10px]">Бүтээгдэхүүн</th>
              <th className="w-[200px] h-[10px]">Aнгилал</th>
              <th className="w-[200px] h-[10px]">Yнэ</th>
              <th className="w-[200px] h-[10px]">Yлдэгдэл</th>
              <th className="w-[200px] h-[10px]">Зарагдсан</th>
              <th className="w-[200px] h-[10px]">Нэмсэн огноо</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[200px]">2343242355</td>
              <td className="w-[200px]">Malcolm Lockyer</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
            </tr>
            <tr>
              <td className="w-[200px]">2343242355</td>
              <td className="w-[200px]">Malcolm Lockyer</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
              <td className="w-[200px] text-center">1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
