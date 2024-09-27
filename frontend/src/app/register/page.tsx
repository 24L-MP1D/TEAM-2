
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FormikErrors, FormikValues, useFormik } from "formik";


interface FormValues {
  firstName: string,
  email: string,
  password: string,
  rePassword: string
}
export default function RegisterPage() {
  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    rePassword: ''
  }
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(`firstName: ${values.firstName}, email:${values.email}`)
    },
    validate: (values) => {
      const error: FormikErrors<FormValues> = {};
      if (!values.firstName) {
        error.firstName = "Нэрээ оруулна уу?"
      }
      if (!values.email) {
        error.email = "И-Мэйл ээ оруулна уу?"
      }
      if (!values.password) {
        error.password = "Нууц үгээ оруулна уу?"
      }
      if (!values.rePassword) {
        error.rePassword = "Нууц үгээ давтаж оруулна уу?"
      }
      return error;
    }
  })

  return (
    <div className="container mx-auto login-box flex  align-items-center w-[334px] mt-20">
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[334px] py-10">
          <h1 className="mx-center font-bold mb-5 text-center">Бүртгүүлэх</h1>
          <Input
            type="text"
            placeholder="Нэр"
            className="rounded-sm w-full"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
         />
          {formik.errors.firstName ? <span className="text-red-500 text-sm text-start">Нэрээ оруулна уу!</span> : null}
          <Input
            type="email"
            id="email"
            placeholder="И-мэйл давтах"
            className="rounded-sm w-full mt-5 mb-5"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <span className="text-red-500 text-sm text-start">И-Мэйл ээ оруулна уу!</span> : null}
          <Input
            id="password"
            type="password"
            placeholder="Нууц үг"
            className="rounded-sm w-full mb-5"
            value={formik.values.password}
            onChange={formik.handleChange}
         />
          {formik.errors.password ? <span className="text-red-500 text-sm text-start">Нууц үгээ оруулна уу!</span> : null}
          <Input
            id="repassword"
            type="password"
            placeholder="Нууц үг давтах"
            className="rounded-sm w-full mb-5"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
         />
          {formik.errors.rePassword ? <span className="text-red-500 text-sm text-start my-2">Нууц үгээ давтаж оруулна уу!</span> : null}
          <Button type="submit" variant="def2" className="bg-blue-500 w-full text-white mt-3">
            Үүсгэх
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
      </form>
    </div>
  );
}
