"use client"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
export default function ItemsCategory() {
    return  categoryItem.map(item =>
        <div className="w-[200px] bg-slay-300 ml-20 mt-2">
           
            <Link className="bg-gray-400 mx-auto"
                href={item.slug}>{item.title}
            </Link>
        </div>
    )
    // <div className=" w-[200px] mt-5 ml-20 rounded ">
    //     <aside className="w-[200px] bg-slay-300 bg">
    //         <h1 className="font-bold mb-3">Ангилал </h1>
    //         <RadioGroup defaultValue="comfortable">
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="default" id="r1" />
    //                 <Label htmlFor="r1">Малгай</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="comfortable" id="r2" />
    //                 <Label htmlFor="r2">Усны сав</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="Т-shirt" id="r3" />
    //                 <Label htmlFor="r3">Т-shirt</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="Hoodiet" id="r4" />
    //                 <Label htmlFor="r4">Hoodie</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="Тee" id="r5" />
    //                 <Label htmlFor="r5">Тee</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="Цүнх" id="r6" />
    //                 <Label htmlFor="r6">Цүнх</Label>
    //             </div>
    //         </RadioGroup>
    //         <h1 className="font-bold mt-10 mb-3">Хэмжээ</h1>
    //         <RadioGroup defaultValue="comfortable">
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="Free" id="r1" />
    //                 <Label htmlFor="r1">Free</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="S" id="r2" />
    //                 <Label htmlFor="r2"></Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="M" id="r3" />
    //                 <Label htmlFor="r3">M</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="L" id="r4" />
    //                 <Label htmlFor="r4">L</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="XL" id="r5" />
    //                 <Label htmlFor="r5">XL</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="2XL" id="r6" />
    //                 <Label htmlFor="r6">2XL</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="2XL" id="r7" />
    //                 <Label htmlFor="r7">2XL</Label>
    //             </div>
    //             <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="3XL" id="r8" />
    //                 <Label htmlFor="r8">3XL</Label>
    //             </div>
    //         </RadioGroup>
    //     </aside>
    // </div>
}
const categoryItem = [
    { title: "Малгай", slug: "head" },
    { title: "t-shirt", slug: "t-shirt" },
    { title: "Усны сав", slug: "kitchen" },
    { title: "Hoodie", slug: "Hoodie" },
    { title: "Tee", slug: "t-shirt" },
    { title: "Цүнх", slug: "bag" }
]