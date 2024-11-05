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

interface Filteredproducts {
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
interface prices {
  price: string;
}

export default function Category() {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const filterbyCategory = async (categoryName: string) => {
    console.log("showing category");
    const res = await fetch(
      `http://localhost:4000/productsfilteredby?categoryName=${categoryName}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setProducts(data);
      // setOpenDropdown(openDropdown)

      console.log("Successfully filtered by the category:", categoryName);
    } else {
      console.log("Error occurred while filtering the products");
    }
  };


  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

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
