"use client";

import Searcharea from "@/components/layout/searchArea";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ProductDetails from "../productdetails/page";
import CategoryList from "@/components/product/productList";

interface Product {
  id: string;
  CategoryName: string;
  size: string; 
}

interface Category {
  id: string;
  categoryName: string; 
}

interface SelectedSize {
  id: number;
  selectedSizes: string[];
}

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<Set<string>>(new Set());
  const [categories, setCategories] = useState<Category[]>([]); 
  const [selectedSizes, setSelectedSizes] = useState<SelectedSize[]>([]); // Add the type <SelectedSize[]>

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

  useEffect(() => {
    const fetchSelectedSizes = async () => {
      try {
        const response = await fetch(`http://localhost:4000/products?selectedSizes[]`);
        if (!response.ok) throw new Error("Failed to fetch selected sizes");
        const data: SelectedSize[] = await response.json();
        setSelectedSizes(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSelectedSizes();
  }, []);

  // Filter for unique categories
  const uniqueCategories = categories.filter((category, index, self) =>
    index === self.findIndex((c) => c.categoryName === category.categoryName)
  );

  // Filter for unique selected sizes
  const uniqueSelectedSizes = selectedSizes.filter((selectedSize, index, self) =>
    index === self.findIndex((s) => s.selectedSizes[0] === selectedSize.selectedSizes[0])
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
        {uniqueSelectedSizes.map((size) => (
          <div className="flex items-center space-x-2 pt-4" key={size.id}>
            <Checkbox id={`size-${size.id}`} />
            <label className="text-[#09090B] font-medium text-sm">
              {size.selectedSizes[0]}
            </label>
          </div>
        ))}
      </div>

      <CategoryList />
      {/* <ProductDetails /> */}
    </div>
  );
}
