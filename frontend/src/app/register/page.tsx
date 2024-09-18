"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


import { useState } from "react";

export default function RegisterPage() {
 
    const [name, setName] = useState("true");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handleRegister = async () => { };
    const onButtonClick = () => {
        setEmailError("");
        setPasswordError("");

        if ("" === email) {
            setEmailError("Please enter your email");
            return;
        }

        if ("" === password) {
            setPasswordError("Please enter a password");
            return;
        }
        if (password.length < 7) {
            setPasswordError("password must be 8 character or longer");
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("please enter a valid email address");
            return;
        }
    };
    return (
      <div className="container mx-auto login-box">
        <div className="w-[334px] h-[446px]">
          <h1 className="mx-center font-bold">Бүртгүүлэх</h1>
          <Input
            type="name"
            placeholder="Нэр"
            className="rounded-sm w-full"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            type="email"
            placeholder="И-мэйл давтах"
            className="rounded-sm w-full"
          ></Input>
          ‹
          <Input
            type="password"
            placeholder="Нууц үг"
            className="rounded-sm w-full"
          ></Input>
          <Input
            type="password"
            placeholder="Нууц үг давтах"
            className="rounded-sm w-full"
          ></Input>
          <ul className="list-none hover:list-disc">
            <li>Том үсэг Орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <Button asChild>
            <Link href="/login" className="bg-blue-500 w-full">
              Үүсгэх
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="/login"
              className="bg-sky-50 mt-8 w-full"
              type="button"
              // value="submit"
            >
              Нэвтрэх
            </Link>
          </Button>
        </div>
      </div>
    );
  
}
}


