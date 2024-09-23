"use client";
import { Button } from "../../../public/ui/button";
import AdminProducts from "@/components/admin/adminProducts";
import Link from "next/link";
import { useState } from "react";
import AdminSetting from "@/components/admin/setting";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../public/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../public/ui/card";
import { Label } from "../../../public/ui/label";
import { Input } from "../../../public/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../../public/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";




// export default function Dashboard() {
//   const [, setAdmin] = useState(false);
//   const [selectedFeature, setSelectedFeature] = useState<string>("adminPanel");

//   // const handleSelectedFeature = (e: { target: { value: any; }; }) => {
//   //   selectedFeature(e.target.value)
//   // }
//   const renderSelectedFeature = () => {
//     switch (selectedFeature) {
//       case "adminProduct": <AdminProducts /> ; break; 
//       case "adminSetting": <AdminSetting /> ; break;
//     }
//   }
//   return (
//     <div className="flex flex mt-20 justify-center">

//       <div className="flex flex-col bg-slate-200 w-[200px] ">
//         {/* <Button variant="default" className="text-white" value={'adminPanel'} onClick={handleSelectedFeature('adminPanel')}>  */}
//           Хяналтын самбар
//         {/* </Button> */}
//         <Button variant="default" className="text-white">
//           Захиалга
//         </Button>
//         <Button variant="default" className="text-white">
//           Орлого
//         </Button>
//         <Button variant="default" className="text-white" onClick={() => (true)}>
//           Бүтээгдэхүүн
//         </Button>
//         <Button variant="default" className="text-white" onClick={() => setAdmin(true)}>
//           Тохиргоо
//         </Button>
//       </div>
//       <div className="flex flex-1 bg-slate-200  mr-20">
//       {/* <renderSelectedFeature/> */}
//       </div>
//     </div>
//   );
// }


export default function TabsDemo() {
  return (
    <div className="">
      

      <div>
        <Tabs defaultValue="account" className="w-[800px] mr-500 container ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" >Бүтээгдэхүүн</TabsTrigger>
            <TabsTrigger value="password">Ангилал</TabsTrigger>
          </TabsList>
          <Button variant="default" className="mt-2 ">+Бүтээгдэхүүн нэмэх </Button>
          <div>

            <DropdownMenu>
              <DropdownMenuTrigger className="my-5">Ангилал</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="ml-5 border border-1-gray">Ангилал</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuContent>
              <DropdownMenuTrigger className="ml-5 border border-1-gray">Үнэ</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="ml-5 border border-1-gray">Ангилал</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuContent>
              <DropdownMenuTrigger className="ml-5 border border-1-gray">Сараар</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="ml-5 border border-1-gray">Ангилал</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


          </div>
          <TabsContent value="account">
            <CardContent>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex-1 ">
                  <table className="table-auto table-fixed border-2-gray border border-slate-400 border-slate-400">
                    <thead className="">
                      <tr className="border border-slate-400">
                        <th className="w-[200px] h-[10px]">Бүтээгдэхүүн</th>
                        <th className="w-[200px] h-[10px]">Aнгилал</th>
                        <th className="w-[200px] h-[10px]">Yнэ</th>
                        <th className="w-[200px] h-[10px]">Yлдэгдэл</th>
                        <th className="w-[200px] h-[10px]">Зарагдсан</th>
                        <th className="w-[200px] h-[10px]">Нэмсэн огноо</th>
                      </tr>
                    </thead>
                    <tbody className="border-x-1 border border-slate-300">
                      <tr className="border-x-1 border border-slate-300">
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
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </CardContent >
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 d">
                <div className="flex-1 bg-slate-300 ">
                  <table className="table-auto table-fixed border border-slate-400 ">
                    <thead className="">
                      <tr className="border-x-1 border border-slate-300">
                        <th className="w-[200px] h-[10px]">Бүтээгдэхүүн</th>
                        <th className="w-[200px] h-[10px]">Aнгилал</th>
                        <th className="w-[200px] h-[10px]">Yнэ</th>
                        <th className="w-[200px] h-[10px]">Yлдэгдэл</th>
                        <th className="w-[200px] h-[10px]">Зарагдсан</th>
                        <th className="w-[200px] h-[10px]">Нэмсэн огноо</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-x-1 border border-slate-300">
                        <td className="w-[200px] ">2343242355</td>
                        <td className="w-[200px] ">Malcolm Lockyer</td>
                        <td className="w-[200px] border border-x-1 border-slate-300">1961</td>
                        <td className="w-[200px] border border-x-1 border-slate-300">1961</td>
                        <td className="w-[200px] border border-x-1 border-slate-300">1961</td>
                        <td className="w-[200px] border border-x-1 border-slate-300">1961</td>
                      </tr>
                      <tr className="border-x-1 border border-slate-300">
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
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
