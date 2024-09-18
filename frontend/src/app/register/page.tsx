"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
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
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>

                <Input
                    type="password"
                    placeholder="Нууц үг"
                    className="rounded-sm w-full mb-5"
                ></Input>
                <Input
                    type="password"
                    placeholder="Нууц үг давтах"
                    className="rounded-sm w-full mb-5"
                ></Input>

                <ul className="block list-none hover:list-disc mb-5">
                    <li className="">Том үсэг Орсон байх</li>
                    <li>Жижиг үсэг орсон байх</li>
                    <li>Тоо орсон байх</li>
                    <li>Тэмдэгт орсон байх</li>
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


// /* Container */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 0px;
// gap: 24px;

// width: 334px;
// height: 436px;
// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
