"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormikErrors, useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

// interface FormValues {
//     email: string,
//     password: string,
//     rePassword: string
// }
export default function LoginPage() {
    const validationSchema = yup.object({
        firstName: yup.string().min(1).required('Нэрээ оруулна уу'),
        email: yup.string().email('буруу и-мэйл').required('И-мэйл ээ оруулна уу'),
        password: yup.string().min(8).max(15)
            .matches(RegExp('(.*[a-z].*)'), 'Lowercase')
            .matches(RegExp('(.*(A-Z).*)'), 'Uppercase')
            .matches(RegExp('(.*\\d.*)'), 'Number')
            .matches(RegExp('[!@#$%^&*(.?=<>]'), 'Special'),
        rePassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Password must mactch')
            .required('rePessword is required')
    }
    )
    const initialValues = {
        email: '',
        password: '',
        rePassword: ''
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            alert(`email:${values.email}, password: ${values.password}, repassword: ${values.rePassword}`)
        },
        validationSchema
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
                    {formik.errors.email ? <span className="text-red-500 text-sm text-start">Нэрээ оруулна уу!</span> : null}
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
                        id="rePassword"
                        type="password"
                        placeholder="Нууц үг давтах"
                        className="rounded-sm w-full my-2"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.rePassword ? <span className="text-red-500 text-sm text-start my-2">Нууц үгээ давтаж оруулна уу</span> : null}

                    <div className="text-center">
                        <Link href="/forgotPass" className="text-slate-300 text-align-center text-center" type="forgetpassword" >Нууц үг мартсан</Link>
                    </div>
                    <Button type="submit" variant="def2" className="bg-blue-500 w-full text-white mt-3">
                        Нэвтрэх
                    </Button>
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
