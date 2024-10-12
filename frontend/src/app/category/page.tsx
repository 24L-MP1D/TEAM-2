"use client";


import { useEffect, useState } from "react";


import ItemsCategory from "@/components/layout/items-category";
import CategoryList from "@/components/categoryList/categoryList";



interface Product {
  _id: string;
  CategoryName: string;
  size: string;
}

interface Category {
  _id: string;
  categoryName: string;
}

interface SelectedSize {
  _id: number;
  selectedSizes: string[];
}

export default function Category() {

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


  return (
    <div className="flex gap-5 pt-[52px] justify-between  mb-20">
      {/* <div>
        <div className="text-[#000000] text-base font-bold">Ангилал</div>
        {uniqueCategories.map((category) => (
          <div className="flex items-center space-x-2 pt-4" key={category._id}>
            <Checkbox id={`category-${category._id}`} />
            <label className="text-[#09090B] font-medium text-sm">
              {category.categoryName}
            </label>
          </div>
        ))}

        <div className="text-[#000000] text-base font-bold pt-12">Хэмжээ</div>
        {uniqueSelectedSizes.map((size) => (
          <div className="flex items-center space-x-2 pt-4" key={size._id}>
            <Checkbox id={`size-${size._id}`} />
            <label className="text-[#09090B] font-medium text-sm">
              {size.selectedSizes[0]}
            </label>
          </div>
        ))}
      </div> */}
    <ItemsCategory/>
      <CategoryList />
      
    </div>
  );
}
