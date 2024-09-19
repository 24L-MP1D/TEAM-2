
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
  const lengthGreator = password.length >=8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[.@#$%^&*(,-_)]/.test(password);
  const samePassword = password === passwordError;



  return (
    <div className="container mx-auto login-box flex mx-auto align-items-center w-[334px] mt-20">
      <div className="w-[334px] h-[446px]">
        <h1 className="mx-center font-bold mb-5 text-center">Бүртгүүлэх</h1>
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
          className="rounded-sm w-full mt-5 mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Нууц үг"
          className="rounded-sm w-full mb-5"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Нууц үг давтах"
          className="rounded-sm w-full mb-5"
          onChange={(e) => setPasswordError(e.target.value)}
        ></Input>
        <ul className="block list-none hover:list-disc mb-5">
          <li className={hasUppercase ? "text-green-600" : "text-red-600"}>Том үсэг Орсон байх</li>
          <li className={hasLowercase ? "text-green-600 " : "text-red-600"}>Жижиг үсэг орсон байх</li>
          <li className={hasNumber ? "text-green-600" : "text-red-600"}>Тоо орсон байх</li>
          <li className={hasSpecialChar ? "text-green-600" : "text-red-600"}>Тэмдэгт орсон байх</li>
          <li className={samePassword ? "text-green-600" : "text-red-600"}>2 нууц үг ижил байх</li>
        </ul>
        <Button asChild variant="def2">
          <Link href="/register" className="bg-blue-500 w-full text-white">
            Үүсгэх
          </Link>
        </Button>
        <Button asChild variant="def3" className="text-blue-500">
          <Link
            href="/login"
            className="bg-sky-50 mt-8 w-full def2"
            type="password"
          >
            Нэвтрэх
          </Link>
        </Button>
      </div>
    </div>
  );
}
