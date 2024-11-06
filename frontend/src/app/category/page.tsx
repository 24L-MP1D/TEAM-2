"use client";


import { useEffect, useState} from "react";


import ItemsCategory from "@/components/layout/items-category";
import CategoryList from "@/components/categoryList/categoryList";




interface Products {
  _id: string;
  name: string;
  barCode: string;
  uploadedPhotos: string[];
  price: number;
  qty: number;
  category: string;
  sold: number;
  createdAt: string;
}


interface Categories {
  _id: string;
  categoryName: string;
}


export default function Category() {

  


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        if (!response.ok) throw new Error("Failed to fetch categories");
 
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSelectedSizes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?selectedSizes[]`);
        if (!response.ok) throw new Error("Failed to fetch selected sizes");


      } catch (err) {
        console.log(err);
      }
    };

    fetchSelectedSizes();
  }, []);



  return (
    <div className="flex gap-5 pt-[52px] justify-between  mb-20">
      
    <ItemsCategory/>
      <CategoryList />
      
    </div>
  );
}
