"use client";

import { Button } from "@/components/ui/button";
import OrderHistory from "@/components/user/orderHistory";
import UserInfo from "@/components/user/userInfo";
import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(false);

  return (
    <div className="bg-[#f7f7f8] text-black flex justify-center">
      <div className="w-[884px] mt-[105px]">
        <div className="flex gap-5">
          <div className="flex flex-col items-start gap-1">
            <Button
              variant={"default2"}
              className={user ? "" : "bg-transparent"}
              onClick={() => setUser(true)}
            >
              Хэрэглэгчийн хэсэг
            </Button>
            <Button
              variant={"default2"}
              onClick={() => setUser(false)}
              className={user ? "bg-transparent" : ""}
            >
              Захиалгын түүх
            </Button>
          </div>
          <div className="flex flex-1">
            {user ? <UserInfo /> : <OrderHistory />}
          </div>
        </div>
      </div>
    </div>
  );
}
