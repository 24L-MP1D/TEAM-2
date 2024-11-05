"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Cookies from 'js-cookie';
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); 

  const validationSchema = Yup.object({
    email: Yup.string().email("Буруу и-мэйл").required("И-мэйл ээ оруулна уу"),
    password: Yup.string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой")
      .matches(/[A-Z]/, "Нууц үг дор хаяж 1 том үсэг агуулсан байх ёстой")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Нууц үг дор хаяж 1 тусгай тэмдэгт агуулсан байх ёстой")
      .required("Нууц үгээ оруулна уу?"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true); 
      await login(values);
      setLoading(false); 
    },
  });

  interface FormValues {
    email: string;
    password: string;
  }

  const login = async (values: FormValues) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 201) {
        console.log('Successfully signed in');
        const { accesstoken } = await response.json();
        Cookies.set('token', accesstoken, { expires: 7, path: '/' });
        router.push('/');
      } else {
        console.log('Error during login, status:', response.status);
      }
    } catch (error) {
      console.error('Login failed due to error:', error);
    }
  };

  return (
    <div className="container login-box flex mx-auto align-items-center w-[334px] my-20">
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[334px] h-[446px]">
          <h1 className="mx-center font-semibold mb-5 text-center text-[#09090B]">
            Нэвтрэх
          </h1>
          <Input
            type="email"
            id="email"
            placeholder="И-мэйл"
            className="rounded-2xl w-full mt-4 text-black"
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={loading} 
          />
          {formik.errors.email && formik.touched.email && (
            <span className="text-red-500 text-sm text-start">{formik.errors.email}</span>
          )}
          <Input
            id="password"
            type="password"
            placeholder="Нууц үг"
            className="rounded-2xl w-full mt-4 text-black"
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={loading} 
          />
          {formik.errors.password && formik.touched.password && (
            <span className="text-red-500 text-sm text-start">{formik.errors.password}</span>
          )}

          <Button
            type="submit"
            variant="def2"
            className="bg-blue-500 w-full text-white mt-3 rounded-2xl"
            disabled={loading} 
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
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
                Ачааллаж байна...
              </span>
            ) : (
              "Нэвтрэх"
            )}
          </Button>
          <div className="text-center mt-4">
            <Link
              href="/forgotPass"
              className="text-[#71717A] text-align-center text-center mt-2"
              type="forgetpassword"
            >
              Нууц үг мартсан
            </Link>
          </div>

          <Button asChild variant="def3" className="text-blue-500 rounded-2xl">
            <Link
              href="/register"
              className="bg-sky-50 mt-8 w-full def2"
              type="password"
            >
              Бүртгүүлэх
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
