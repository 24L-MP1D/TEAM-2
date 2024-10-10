"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export function Address({
  setVisible,
}: {
  setVisible: Dispatch<SetStateAction<number>>;
}) {
  var numeral = require("numeral");

  interface Product {
    productId: string;
    productName: string[];
    productTag: string;
    productPhotos: string[];
    productAddinfo: string;
    size: string[];
    qty: number;
    price: number;
  }

  interface formValues {
    lastName: string;
    name: string;
    phoneNumber: number;
    location: string;
    addInfo: string;
  }

  const validationSchema = yup.object({
    lastName: yup

      .string()

      .min(2, " Овог 2 тэмдэгтээс их байх шаардлагатай!")

      .required("Овог оруулна уу!"),

    name: yup

      .string()

      .min(2, " Нэр 2 тэмдэгтээс их байх шаардлагатай!")

      .required("нэр оруулна уу!"),

    phoneNumber: yup

      .number()

      .min(6, "Дугаар 6 оронгоос их тоо байх шаардлагатай!")

      .required("Дугаар  оруулна уу!"),

    location: yup

      .string()

      .min(6, " Хаяг 6 тэмдэгтээс их байх шаардлагатай!")

      .required("хаяг оруулна уу!"),

    addInfo: yup.string(),
  });

  const formik = useFormik<formValues>({
    initialValues: {
      lastName: "",
      name: "",
      phoneNumber: 0,
      location: "",
      addInfo: "",
    },

    onSubmit: (values: formValues) => {
      createOrder(values);
    },

    validationSchema,
  });

  useEffect(() => {
    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    setProducts(existingCart);
  }, []);

  const createOrder = (values: formValues) => {

    const orderData = { ...values, chosenProducts: products };

    try {
      fetch(`http://localhost:4000/buySteps`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          orderData,
        }),
        headers: {
          "Content-type": "application/json; cherset=UTF-8",
        },
      }).then(() => {
        setVisible(3);

        console.log("successfully ordered");
      });
    } catch (error) {
      console.error("error happened during order process", error);
    }
  };
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex gap-5">
        <div className="bg-white p-8 rounded-2xl h-fit">
          <div className="w-[333px] max-h-[678px] flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="font-bold text-black text-xl flex">
                1.Сагс &nbsp;
                <div className="text-[#71717A]">({products.length})</div>
              </div>

              <div className="border-b-[1px] border-dashed border-[#ECEDF0] flex-nowrap overflow-hidden max-h-[678px] flex flex-col gap-4 pb-4">
                {products.map((product, index) => (
                  <div className="">
                    <div className="flex items-start gap-4 rounded-2xl">
                      <Image
                        src={product?.productPhotos[0]}
                        width={80}
                        height={80}
                        alt={product.productId}
                        className="w-[80px] h-[80px] rounded-2xl overflow-hidden"
                      ></Image>
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="text-base font-normal">
                          {product.productName}{" "}
                        </div>
                        <div className="flex flex-col gap-2 ">
                          <div className="font-bold text-base">
                            {numeral(product.price * product.qty).format("0,0")}
                            &#8366;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <div className="text-lg font-normal">Нийт төлөх дүн:</div>
                <div className="font-bold text-xl">
                  {numeral(
                    products.reduce(
                      (total, product) => total + product.price * product.qty,
                      0
                    )
                  ).format("0,0")}
                  &#8366;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl flex flex-col gap-9 w-[687px]">
          <div className="font-semibold text-lg">
            2.Хүргэлтийн мэдээлэл оруулах
          </div>
          <div className="flex flex-col gap-4 font-semibold text-sm">
            <div className="flex flex-col gap-2">
              Овог:
              <Input
                name="lastName"
                className="rounded-full bg-white"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 text-sm text-start">
                {formik.errors.lastName}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              Нэр:
              <Input
                name="name"
                className="rounded-full bg-white"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 text-sm text-start">
                {formik.errors.name}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              Утасны дугаар:
              <Input
                name="phoneNumber"
                className="rounded-full bg-white"
                type="text"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 text-sm text-start">
                {formik.errors.phoneNumber}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              Хаяг:
              <Textarea
                name="location"
                className="rounded-3xl bg-white"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 text-sm text-start">
                {formik.errors.location}{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              Нэмэлт мэдээлэл:
              <Textarea
                name="addInfo"
                className="rounded-3xl bg-white"
                value={formik.values.addInfo}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 text-sm text-start">
                {formik.errors.addInfo}{" "}
              </span>
              <span className="font-normal text-xs text-[#71717A]">
                Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              className="bg-transparent text-black px-8 border-#71717A border-solid border-[1px] rounded-full hover:bg-slate-200"
              onClick={() => setVisible(1)}
            >
              Буцах
            </Button>
            <Button variant={"default3"} className="px-8" type="submit">
              Төлбөр төлөх
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
