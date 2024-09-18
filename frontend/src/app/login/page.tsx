"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";


export default function LoginPage() {
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
        <div className="container mx-auto login-box flex mx-auto align-items-center w-[334px] mt-20">
            <div className="w-[334px] h-[446px]">
                <h1 className="font-bold mb-5 text-center text-align-center">Нэвтрэх</h1>
                <Input
                    type="email"
                    placeholder="И-мэйл хаяг"
                    className="rounded-sm w-full mt-5 mb-5"
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>

                <Input
                    type="password"
                    placeholder="Нууц үг"
                    className="rounded-sm w-full mb-5"
                ></Input>
                <Input
                    type="password1"
                    placeholder="Нууц үг давтах"
                    className="rounded-sm w-full mb-5"
                ></Input>
                <div className="text-center">
                    <Link href="/forgotPass" className="text-slate-300 text-align-center text-center" type="forgetpassword" >Нууц үг мартсан</Link>
                </div>
                <Button asChild variant="def2" className="rounded-sm">
                    <Link
                        href="/login"
                        className="bg-blue-500 mt-8 w-full"
                        type="button"
                    //   value="submit"
                    >
                        Нэвтрэх
                    </Link>
                </Button>
                <Button asChild variant="def3">
                    <Link href="/register" className="bg-blue-500 w-full mt-5">
                        Үүсгэх
                    </Link>
                </Button>
            </div>
        </div>
    );

}
