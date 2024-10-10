"use client";
import { fetcher } from "@/components/fetcher";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { PrivateKeyInput } from "crypto";

import CategoryList from "@/components/categoryList/categoryList";
import { ProductList } from "@/components/productList/productList";



interface Product {
  uploadedPhotos: string[];
  _id: string;
  name: string;
  size: string;
  price: number;
  tag: string;
  addinfo: string;
}


export default function ProductDetails({ params, }: { params: { productId: string }; }) {
  const id = params.productId;

  const [selectedCount, setSelectedCount] = useState<number>(0);

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const id = params.productId;

  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [filledStars, setFilledStars] = useState<number>(0);
  const [isReviewVisible, setIsReviewVisible] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const [product, setProduct] = useState<Product>({} as Product);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const router = useRouter();
  const [savedProductIds, setSavedProductIds] = useState<string[]>([]);



  interface ProductData {
    _id: string;
    name: string;
    size: string;
    images: string;
    price: number;
    uploadedPhotos: string;
  }
  interface Product {
    index: null | undefined;
    uploadedPhotos: string[];
    _id: string;
    name: string;
    size: string;
    price: number;
  }

  useEffect(() => {

    fetcher(`/product/${id}`, "GET").then((data) => setProduct(data));
  }, [product]);


  const addToCart = async () => {


    fetcher(`/product/${id}`, "GET").then((data) => {
      setProduct(data);
      setTotalPrice(data?.price);
    });
  }, [id]);

  const addToCart = async (id: string) => {

    const cookie = Cookies.get("token");

    if (!cookie) {
      alert("Сагсанд нэмэхийн тулд хэрэглэгч та нэвтрэх шаардлагатай!")
      router.push('/login');
      return
    } else {
      try {

        const productId = params.productId;
        const fromLocal = localStorage.getItem("")
        const token = Cookies.get("token") || "";
        const decodedToken = jwtDecode(token);
        console.log("data recorded");
      } catch {
        console.log("error");
        console.log("error");

        const existingCart = JSON.parse(
          localStorage.getItem("cartProducts") || "[]"
        );

        const existingProductIndex = existingCart.findIndex(
          (item: any) => item.id === id && item.size === selectedSize
        );

        if (existingProductIndex !== -1) {
          existingCart[existingProductIndex].qty += selectedCount;
        } else {
          const newProduct = {
            productId: id,
            productName: product.name,
            productTag: product.tag,
            productPhotos: product.uploadedPhotos,
            productAddinfo: product.addinfo,
            size: selectedSize,
            qty: selectedCount,
            price: product.price,
          };

          existingCart.push(newProduct);
        }

        localStorage.setItem("cartProducts", JSON.stringify(existingCart));

        alert("Бараа сагсанд амжилттай нэмэгдлээ!");
      } catch (error) {
        console.error("Error adding to cart", error);

      }
    };
  }
  const handleSaveClick = (product: Product, event: any)=>{
    event.stopPropagation();
    event.preventDefault();

    const saved = localStorage.getItem("savedProducts");
    const savedProducts: Product[] = saved ? JSON.parse(saved) : [];

    if (savedProducts.find(item => item._id === product._id)) {
      const newProducts = savedProducts.filter(item => item._id !== product._id);
      localStorage.setItem("savedProducts", JSON.stringify(newProducts));
      updateSavedProductIds();

    }
    else {
      savedProducts.push(product);
      localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
      updateSavedProductIds();

    }
  }

  function updateSavedProductIds() {
    const saved = localStorage.getItem("savedProducts");
    const savedProducts: Product[] = saved ? JSON.parse(saved) : [];
    if (saved) {
      setSavedProductIds(savedProducts.map(item => item._id));
    }
  }

  // useEffect(() => {
  //   updateSavedProductIds();
  //   fetcher("/products", "GET").then((data) => setProducts(data));
  // }, []);






  return (
    <div>
      <div className="flex gap-5 pt-[52px]">
        <div className="pt-[95px] flex flex-col gap-2">
          {product && (
            <Image
              key={product._id}

              className="w-[67px] h-[67px] rounded cursor-pointer"
              width={67}
              height={67}
              alt={product._id}
              src={product.uploadedPhotos?.[0]}
            // onClick={() => {
            //   setSelectedProduct(product);
            //   setSelectedImage(product.images);
            // }}
            />
          )}
        </div>




        {product && (

  const handleQuantityChange = (increment: number) => {
    setSelectedCount((prevCount) => {
      const newCount = Math.max(prevCount + increment, 1);
      setTotalPrice(newCount * product.price);
      return newCount;
    });
  };

  return (
    <div>
      <div className="">
        <div className="flex gap-5 pt-[52px]">
          <div className="pt-[95px] flex flex-col gap-2">
            {product?.uploadedPhotos &&
              product?.uploadedPhotos.map((photo, index) => (
                <Image
                  key={index}
                  className="w-[67px] h-[67px] rounded cursor-pointer"
                  width={67}
                  height={67}
                  alt={product._id}
                  src={photo}
                  onClick={() => setSelectedSize(product.size[index])}
                />
              ))}
          </div>
          {product?.uploadedPhotos && (

          <Image
            alt={product.name || "Product Image"}
            src={product.uploadedPhotos?.[0]}
            className="w-[422px] h-[521px] rounded-2xl"
            width={422}
            height={521}
          />
        )}


        {product && (
          <div className="pt-[100px]">
            <button
              type="button"
              className="px-[10px] border-[#2563EB] border-[1px] text-[#09090B] rounded-full"
            >
              New
            </button>
            <div className="flex gap-4 items-center pt-2">
              <h2 className="font-bold text-2xl text-black">{product.name}</h2>

              <Heart
                  color={savedProductIds.includes(product._id) ? "black" : "gray"}
                  fill={savedProductIds.includes(product._id) ? "black" : "none"}
                  onClick={(event) => handleSaveClick(product, event)}
                />
            </div>

            <h3 className="font-normal text-base text-[#000000] pt-2">
              {product.name}
            </h3>
            <h3 className="font-normal text-[#000000] text-sm pt-4">
              Хэмжээний заавар
            </h3>
            <div className="pt-4 flex gap-2">
              {/* <div className="pt-4 flex gap-2">
              {selectedProduct.size.map((size) => (
          {product && (
            <div className="pt-[100px]">
              <button
                type="button"
                className="px-[10px] border-[#2563EB] border-[1px] text-[#09090B] rounded-full"
              >
                {product.tag}
              </button>
              <div className="flex gap-4 items-center pt-2">
                <h2 className="font-bold text-2xl text-black">
                  {product.name}
                </h2>
                <Heart
                  color={isSaved ? "black" : "black"}
                  fill={isSaved ? "black" : "none"}
                  onClick={() => setIsSaved(!isSaved)}
                />
              </div>

              <h3 className="font-normal text-base text-[#000000] pt-2">
                {product.name}
              </h3>
              <h3 className="font-normal text-[#000000] text-sm pt-4">
                Хэмжээний заавар
              </h3>
              <div className="pt-4 flex gap-2">
                {product.size?.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`border-[#18181B] border-[1px] rounded-2xl w-12 h-8 font-normal text-lg 
                  ${
                    selectedSize === size
                      ? "bg-[#2563EB] text-white"
                      : "bg-[#FFFFFF] text-[#09090B]"
                  }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Quantity Buttons */}
              <div className="pt-4 flex gap-2 items-center">

                <button
                  type="button"

                  className={`border-[#18181B] border-[1px] rounded-2xl w-12 h-8 font-normal text-lg 
                    ${selectedSize === size ? 'bg-[#2563EB] text-white' : 'bg-[#FFFFFF] text-[#09090B]'}`}
                  onClick={() => setSelectedSize(size)}

                  className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                  onClick={() => handleQuantityChange(-1)} // Decrement quantity

                >
                  -
                </button>

              ))}
            </div> */}
            </div>

            <div className="pt-4 flex gap-2 items-center">
              <button
                type="button"
                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                onClick={() =>
                  setSelectedCount((prevCount) => Math.max(prevCount - 1, 0))
                }
              >
                -
              </button>
              <div className="text-black text-xs">{selectedCount}</div>
              <button
                type="button"
                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                onClick={() => setSelectedCount(selectedCount + 1)}

                <div className="text-black text-xs">{selectedCount}</div>
                <button
                  type="button"
                  className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                  onClick={() => handleQuantityChange(1)} // Increment quantity
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div className="font-bold text-xl text-[#000000] pt-6">
                {totalPrice} ₮ {/* Dynamically updated price */}
              </div>

              <button
                className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]"
                onClick={() => addToCart(id)}

              >
                Сагсанд нэмэх
              </button>


            <div className="font-bold text-xl text-[#000000] pt-6">
              {product.price} ₮
            </div>

            <button
              className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]"
              onClick={addToCart}
            >
              Сагсанд нэмэх
            </button>

            <div className="flex gap-4 pt-[55px]">
              <div className="text-[#09090B] text-sm">Үнэлгээ</div>
              <a
                className="text-[#2563EB] text-sm underline underline-offset-1 cursor-pointer"
              // onClick={toggleReviews}
              >
                бүгдийг хураах
              </a>
            </div>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star
                  key={index}
                  color="yellow"
                  fill={index < filledStars ? "yellow" : "white"}
                  onClick={() => setFilledStars(index + 1)}
                  style={{ cursor: "pointer" }}
                />
              ))}
              <div className="text-black">4.6 (24)</div>
            </div>

            {isReviewVisible && (
              <div className="pt-4">
                <div>No reviews yet.</div>
              </div>
            )}
          </div>
        )}

              {/* Reviews Section */}
              <div className="flex gap-4 pt-[55px]">
                <div className="text-[#09090B] text-sm">Үнэлгээ</div>
                <a
                  className="text-[#2563EB] text-sm underline underline-offset-1 cursor-pointer"
                  onClick={toggleReviews}
                >
                  бүгдийг хураах
                </a>
              </div>
              <div className="flex">
                {[0, 1, 2, 3, 4].map((index) => (
                  <Star
                    key={index}
                    color="yellow"
                    fill={index < filledStars ? "yellow" : "white"}
                    onClick={() => setFilledStars(index + 1)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
                <div className="text-black">4.6 (24)</div>
              </div>

              {/* Review Visibility */}
              {isReviewVisible && (
                <div className="pt-4">
                  <div>No reviews yet.</div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="text-[#000000] font-bold text-3xl pt-20">Холбоотой бараа</div>
        <div >
          <ProductList />
        </div>

      </div>
      <div className="text-black font-bold text-3xl pt-[80px]">
        Холбоотой бараа
      </div>
      {/* <div className="grid grid-cols-4 gap-x-5 gap-y-12 overflow-hidden pt-6 ">
        {RefProducts.map((products) =>
        (
          <div
            key={products._id}

          >
            <div className="overflow-hidden relative  w-[244px] h-[331px] rounded-xl">
              <Image
                src={products.images}
                alt={products.productName}
                width={100}
                height={100}
                className="relative transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-xl w-full"
              />
              <Heart
                className="absolute top-2 right-2 z-10 cursor-pointer"
                color={savedProducts.has(product._id) ? "black" : "gray"}
                fill={savedProducts.has(product._id) ? "black" : "none"}
                onClick={() => handleSaveClick(product._id)}
              />
            </div>
            <p className="text-[#000000] text-base font-normal pt-2">
              {products.name}
            </p>
            <p className="text-[#000000] text-base font-bold pt-1">
              {products.price} ₮
            </p>
          </div>
        ))}

      </div> */}
    </div>
  );
}
