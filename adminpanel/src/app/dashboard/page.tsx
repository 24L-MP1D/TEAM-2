"use client";
import { Button } from "@/components/ui/button";
import AdminProducts from "@/components/admin/adminProducts";
import Link from "next/link";
import { useState } from "react";
import AdminSetting from "@/components/admin/setting";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [, setAdmin] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string>("adminPanel");

  // const handleSelectedFeature = (e: { target: { value: any; }; }) => {
  //   selectedFeature(e.target.value)
  // }
  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case "adminProduct": <AdminProducts /> ; break; 
      case "adminSetting": <AdminSetting /> ; break;
    }
  }
  return (
    <div className="flex flex mt-20 justify-center">

      <div className="flex flex-col bg-slate-200 w-[200px] ">
        {/* <Button variant="default" className="text-white" value={'adminPanel'} onClick={handleSelectedFeature('adminPanel')}>  */}
          Хяналтын самбар
        {/* </Button> */}
        <Button variant="default" className="text-white">
          Захиалга
        </Button>
        <Button variant="default" className="text-white">
          Орлого
        </Button>
        <Button variant="default" className="text-white" onClick={() => (true)}>
          Бүтээгдэхүүн
        </Button>
        <Button variant="default" className="text-white" onClick={() => setAdmin(true)}>
          Тохиргоо
        </Button>
      </div>
      <div className="flex flex-1 bg-slate-200  mr-20">
      {/* <renderSelectedFeature/> */}
      </div>
    </div>
  );
}

// {user ? <UserInfo /> : <OrderHistory />}
/* Left-Bar */

// position: absolute;
// width: 222px;
// height: 976px;
// left: 0px;
// top: 48px;

// background: #FFFFFF;



export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <CardContent>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
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
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
