"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Нэрээ оруулна уу?"),
    email: Yup.string()
      .email("И-мэйл буруу байна")
      .required("И-Мэйл ээ оруулна уу?"),
    password: Yup.string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой")
      .matches(/[A-Z]/, "Нууц үг дор хаяж 1 том үсэг агуулсан байх ёстой")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Нууц үг дор хаяж 1 тусгай тэмдэгт агуулсан байх ёстой"
      )
      .required("Нууц үгээ оруулна уу?"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Нууц үг давтагдаагүй байна")
      .required("Нууц үгээ давтаж оруулна уу?"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      await signUp(values);
      setLoading(false);
    },
  });

  const signUp = async (values: FormValues) => {
    setErrorMessage(""); // Clear any previous errors

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.status === 201) {
        router.push("/"); // Redirect to the home page
      } else {
        const data = await response.json();
        setErrorMessage(data.errorMessage || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("Error during registering the user");
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center w-[334px] my-20">
      <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
        <h1 className="text-center font-semibold text-xl mb-4 text-[#09090B]">
          Бүртгүүлэх
        </h1>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}

        <Input
          type="text"
          id="name"
          placeholder="Нэр"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="rounded-2xl w-full text-black"
        />
        {formik.errors.name && formik.touched.name && (
          <span className="text-red-500 text-sm">{formik.errors.name}</span>
        )}

        <Input
          type="email"
          id="email"
          placeholder="И-мэйл"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="rounded-2xl w-full text-black"
        />
        {formik.errors.email && formik.touched.email && (
          <span className="text-red-500 text-sm">{formik.errors.email}</span>
        )}

        <Input
          id="password"
          type="password"
          placeholder="Нууц үг"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="rounded-2xl w-full text-black"
        />
        {formik.errors.password && formik.touched.password && (
          <span className="text-red-500 text-sm">{formik.errors.password}</span>
        )}

        <Input
          id="rePassword"
          type="password"
          placeholder="Нууц үг давтах"
          value={formik.values.rePassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="rounded-2xl w-full text-black"
        />
        {formik.errors.rePassword && formik.touched.rePassword && (
          <span className="text-red-500 text-sm">{formik.errors.rePassword}</span>
        )}

        <Button
          type="submit"
          variant="def2"
          className={`w-full mt-4 rounded-2xl flex items-center justify-center text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading || !(formik.isValid && formik.dirty)}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              <span>Ачааллаж байна...</span>
            </span>
          ) : (
            "Үүсгэх"
          )}
        </Button>
      </form>

      <div className="w-full mt-6 flex justify-center">
        <Link href="/login">
          <Button
            asChild
            variant="def3"
            className="w-full text-blue-500 hover:text-blue-700 rounded-2xl"
          >
            <span>Нэвтрэх</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
