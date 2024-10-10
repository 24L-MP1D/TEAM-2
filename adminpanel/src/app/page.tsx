"use client";

import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../../public/ui/input";
import { Button } from "../../public/ui/button";
import { FormikErrors, useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function RegisterPage() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Нэр ээ оруулна уу"),
    email: Yup.string().email("буруу и-мэйл").required("И-мэйл ээ оруулна уу"),
    password: Yup.string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой")
      .matches(/[A-Z]/, "Нууц үг дор хаяж 1 том үсэг агуулсан байх ёстой")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Нууц үг дор хаяж 1 тусгай тэмдэгт агуулсан байх ёстой"
      )
      .required("Нууц үгээ оруулна уу?"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await login(values);
    },
    validationSchema,
  });

  interface FormValues {
    name: string;
    email: string;
    password: string;
  }

  const login = async (values: FormValues) => {
    try {
      const response = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 201) {
        console.log("Successfully signed in");
        router.push("/order");
      } else {
        console.log("Error during login, status:", response.status);
      }
    } catch (error) {
      console.error("Login failed due to error:", error);
    }
  };
  const router = useRouter();

  return (
    <div>
      <Image
        src="/logoo.png"
        alt="Logo"
        width={200}
        height={32}
        className="pt-[44px] pl-[44px] "
      />
      <div className="container mx-auto login-box flex  align-items-center w-[334px] mt-20">
        <div className=" border-[#ECEDF0] border-[1px] h-[100vw] rounded-xl">
          <h1 className="mx-center font-bold mb-5 text-center text-[#121316] text-[32px]">
            Нэвтрэх
          </h1>

          <div className="flex flex-col gap-4 pt-6">
            <div className="flex flex-col gap-2">
              <Label className="text-[#121316] font-normal text-base  ">
                Таны нэр{" "}
              </Label>
              <Input
                type="name"
                placeholder="name"
                className="rounded-sm w-full  bg-[#F7F7F8] h-[56px] text-black"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              ></Input>
              {formik.errors.name && formik.touched.name && (
                <span className="text-red-500 text-sm text-start">
                  {formik.errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[#121316] font-normal text-base  ">
                Таны имэйл{" "}
              </Label>
              <Input
                type="email"
                placeholder="Имэйл"
                className="rounded-sm w-full  bg-[#F7F7F8] h-[56px] text-black"
                id="email"
                value={formik.values.name}
                onChange={formik.handleChange}
              ></Input>
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-500 text-sm text-start">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[#121316] font-normal text-base ">
                Нууц үг{" "}
              </Label>
              <Input
                type="password"
                placeholder="Нууц үг"
                className="rounded-sm w-full  bg-[#F7F7F8] h-[56px] text-black"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              ></Input>
              {formik.errors.password && formik.touched.password && (
                <span className="text-red-500 text-sm text-start">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className="relative">
              <Button
                className="h-[60px] w-[360px] text-lg bg-black text-[#FFFFFF] flex relative rounded-lg"
                type="submit"
              >
                Нэвтрэх
                <ArrowRight color="white" className="absolute right-5" />
              </Button>
            </div>

            <div className="h-[250px] w-[360px] border-[#ECEDF0] border-t-2 border-b-2 flex flex-col gap-4 pt-4">
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2 pt-6">
                <Image src="/google.png" alt="google" width={24} height={24} />
                Google-ээр нэвтрэх
              </Button>
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2">
                <Image
                  src="/microsoft.png"
                  alt="google"
                  width={24}
                  height={24}
                />
                Microsoft-оор нэвтрэх
              </Button>
              <Button className=" w-[360px] h-[48px] bg-[#1C20240A] text-[#121316] text-base font-normal flex gap-2">
                <Image src="/apple.png" alt="google" width={24} height={24} />
                Apple-аар нэвтрэх
              </Button>
            </div>

            <div className="flex gap-1 justify-center">
              <h2 className="text-[#525252]">Бүртгэлтэй юу?</h2>
              <a className="text-[#525252] underline">Нэвтрэх</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
