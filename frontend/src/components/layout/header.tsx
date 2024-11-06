"use client";

import { CiSearch } from "react-icons/ci";
import { PiHeartStraight, PiShoppingCartSimple } from "react-icons/pi";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Products {
  _id: string;
  name: string;
  uploadedPhotos: string[];
  price: number;
}

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Products[]>([]);
  const router = useRouter();

  const fetchWishlistCount = () => {
    const count = localStorage.getItem("wishlistCount");
    setWishlistCount(count ? JSON.parse(count) : 0);
  };

  useEffect(() => {
    fetchWishlistCount();
    window.addEventListener("wishlistCountUpdated", fetchWishlistCount);
    return () => window.removeEventListener("wishlistCountUpdated", fetchWishlistCount);
  }, []);
  const filterbySearch = async () => {
    if (!search) {
      setProducts([]); 
      return;
    }
    
    try {
      const res = await fetch(`http://localhost:4000/productsfilteredbySearch?search=${search}`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      } else {
        console.error("Error fetching filtered products");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  
  useEffect(() => {
    filterbySearch();
  }, [search]);

  
  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="bg-black">
      <header className="mx-auto max-w-[1440px] px-6 py-4">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-1">
              <Image alt="src" src="/symbol.png" width={32} height={32} />
              <span className="text-sm font-normal">ECOMMERCE</span>
            </Link>
            <Link href="/category">
              <button className="text-sm text-white text-opacity-75">Ангилал</button>
            </Link>
          </div>
          <Popover open={openSearch}>
            <PopoverTrigger asChild>
              <div className="relative w-[300px] h-[40px] bg-[#18181b] px-4 py-2 rounded-[20px] flex items-center gap-2">
                <CiSearch className="size-6 text-white" />
                <input
                  onFocus={() => setOpenSearch(true)}
                  onBlur={() => setTimeout(() => setOpenSearch(false), 200)}
                  placeholder="Бүтээгдэхүүн хайх"
                  className="w-full bg-[#18181b] text-white outline-none placeholder-[#71717a]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="border-1 w-[610px] bg-white">
              {products.length > 0 ? (
                products.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id}>
                    <div className="flex items-center border-b py-2">
                      <Image src={product.uploadedPhotos[0]} alt={product.name} width={50} height={50} className="rounded" />
                      <div className="ml-2">
                        <p className="font-bold">{product.name}</p>
                        <p>{product.price} ₮</p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">No products found</div>
              )}
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer" onClick={() => router.push("/wishlist")}>
              <PiHeartStraight className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                  {wishlistCount}
                </span>
              )}
            </div>
            <Link href="/buySteps">
              <PiShoppingCartSimple className="w-6 h-6" />
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  Cookies.remove('token');
                  setIsLoggedIn(false);
                  router.push('/');
                }}
                className="py-2 px-3 border border-red-600 rounded-[18px] text-sm text-white"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-2">
                <Link href="/register">
                  <button className="py-2 px-3 border border-blue-600 rounded-[18px] text-sm text-white">
                    Бүртгүүлэх
                  </button>
                </Link>
                <Link href="/login">
                  <button className="py-2 px-3 border border-[#2563eb] bg-[#2563EB] rounded-[18px] text-sm text-white">
                    Нэвтрэх
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
