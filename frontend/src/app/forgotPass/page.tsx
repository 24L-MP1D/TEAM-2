
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function forgotPassword() {
    return (
        <div className="w-[334px] h-[446px] mt-20 container mx-auto align-items-center justify-content-center">
            <h1 className="font-bold mb-5 text-center text-align-center">Нууц үг сэргээх</h1>
            <Input
                type="email"
                placeholder="И-мэйл хаяг оруулах"
                className="rounded-sm w-full mt-5 mb-5"
            // onChange={(e) => setEmail(e.target.value)}
            >
            </Input>
            <Button asChild variant="def2">
                <Link
                    href="/restorepass"
                    className="bg-blue-500 mt-2 w-full"
                    type="button"
                //   value="submit"
                >
                    Илгээх
                </Link>
            </Button>
        </div>

    )
}
