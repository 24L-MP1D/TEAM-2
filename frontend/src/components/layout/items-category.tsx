"use client"

import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
export default function ItemsCategory() {
    return (
        <div className=" w-[200px] mt-5 ml-20 rounded ">
            <h1 className="font-bold text-black">Ангилал</h1>
            {categoryItem.map((item) => (
                <div className="mt-2" key={item.slug}>
                    <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2 text-black">
                        <RadioGroupItem value="default" id="r1" className='text-black' />
                    
                        <Link className="mx-auto"
                        href={item.slug}>{item.title}
                    </Link> 
                    </div>
                    </RadioGroup>
                  
                </div>
            ))}
             <h1 className="font-bold mt-16 text-black">Хэмжээ</h1>
            {categorySize.map((size)=>(
                <div className="mt-2"  key={size.title}>
                    <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2 text-black">
                        <RadioGroupItem value="default" id="r1" className='text-black' />
                        <Link className="mx-auto"
                        href={size.slug}>{size.title}
                    </Link>
                    </div>
                    </RadioGroup>
                </div>
            ))}
        </div>
    )
}
const categoryItem = [
    { title: "Малгай", slug: "head" },
    { title: "t-shirt", slug: "t-shirt" },
    { title: "Усны сав", slug: "kitchen" },
    { title: "Hoodie", slug: "Hoodie" },
    { title: "Tee", slug: "t-shirt" },
    { title: "Цүнх", slug: "bag" }
]
const categorySize = [
    {title: "Free", slug: "free"},
    {title: "S", slug: "S"},
    {title: "M", slug: "M"},
    {title: "L", slug: "L"},
    {title: "XL", slug: "XL"},
    {title: "2XL", slug: "2XL"},
    {title: "3XL", slug: "3XL"},
]