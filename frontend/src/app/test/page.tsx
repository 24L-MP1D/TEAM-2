"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="container h-[1100px] p-20 flex gap-10 ">
      <Button onClick={() => setCount(count - 1)} disabled={count == 0 }>-</Button>
      <p className="text-black">{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}
