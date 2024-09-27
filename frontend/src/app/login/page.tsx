"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormikErrors, useFormik } from "formik";
import Link from "next/link";

interface FormValues {
    email: string,
    password: string,
    rePassword: string
}
export default function LoginPage() {
    const initialValues = {
        email: '',
        password: '',
        repassword: ''
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            alert(`email:${values.email}, password: ${values.password}, repassword: ${values.repassword}`)
        },
        validate: (values) => {
            const error: FormikErrors<FormValues> = {};
            if (!values.email) {
                error.email = "И-Мэйл ээ оруулна уу?"
            }
            if (!values.password) {
                error.password = "Нууц үгээ оруулна уу?"
            }
            if (!values.repassword) {
                error.rePassword = "Нууц үгээ давтаж оруулна уу?"
            }
            return error;
        }
    })


    return (
        <div className="container mx-auto login-box flex mx-auto align-items-center w-[334px] mt-20 my-auto">
            <form onSubmit={formik.handleSubmit}>
                <div className="w-[334px] h-[446px]">
                    <h1 className="font-bold mb-5 text-center text-align-center">Нэвтрэх</h1>
                    <Input
                        type="text"
                        placeholder="И-мэйл хаяг"
                        className="rounded-sm w-full my-5   "
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email ? <span className="text-red-500 text-sm text-start my-2">Нэрээ оруулна уу!</span> : null}
                    <Input
                        type="password"
                        placeholder="Нууц үг"
                        className="rounded-sm w-full mb-3"
                    />
                    {formik.errors.password ? <span className="text-red-500 text-sm text-start">Нууц үгээ оруулна уу</span> : null}
                    <Input
                        type="password1"
                        placeholder="Нууц үг давтах"
                        className="rounded-sm w-full mb-3"
                    />
                    {formik.errors.repassword ? <span className="text-red-500 text-sm text-start my-2">Нууц үгээ давтаж оруулна уу</span> : null}

                    <div className="text-center">
                        <Link href="/forgotPass" className="text-slate-300 text-align-center text-center" type="forgetpassword" >Нууц үг мартсан</Link>
                    </div>


                    <Link
                        href="/login" type="submit">
                        <Button variant="def2" className="bg-blue-500 mt-8 w-full" type="submit">Нэвтрэх</Button>
                    </Link>

                    <Button asChild variant="def3">
                        <Link href="/register" className="bg-blue-500 w-full mt-5">
                            Үүсгэх
                        </Link>
                    </Button>
                </div>
            </form >
        </div >
    );

}
