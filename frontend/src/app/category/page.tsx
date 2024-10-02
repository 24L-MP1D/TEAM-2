"use client";

import Searcharea from "@/components/layout/searchArea";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ProductDetails from "../productdetails/page";
import CategoryList from "@/components/product/productList";


// Define types for products and categories (update them as necessary)
interface Product {
  id: string;
  CategoryName: string;
  size: string; // Optional if not all products have sizes
}

interface Category {
  id: string;
  categoryName: string; // Change this according to your actual data structure
}

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<Set<string>>(new Set());
  const [categories, setCategories] = useState<Category[]>([]); // Correct variable name

  const handleSaveClick = (id: string) => {
    setSavedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/categories');
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  const uniqueCategories = categories.filter((category, index, self) =>
    index === self.findIndex((c) => c.categoryName === category.categoryName)
  );

  return (
    <div className="flex gap-5 pt-[52px] justify-between">
      <div>
        <div className="text-[#000000] text-base font-bold">Ангилал</div>
        {uniqueCategories.map((category) => (
          <div className="flex items-center space-x-2 pt-4" key={category.id}>
            <Checkbox id={`category-${category.id}`} />
            <label className="text-[#09090B] font-medium text-sm">
              {category.categoryName}
            </label>
          </div>
        ))}

        <div className="text-[#000000] text-base font-bold pt-12">Хэмжээ</div>
        {products.map((product) => (
          <div className="flex items-center space-x-2 pt-4" key={product.id}>
            <Checkbox id={`size-${product.id}`} />
            <label className="text-[#09090B] font-medium text-sm">
              {product.size }
            </label>
          </div>
        ))}
      </div>

        <CategoryList/>
  {/* <ProductDetails/> */}
    </div>
  );
}
