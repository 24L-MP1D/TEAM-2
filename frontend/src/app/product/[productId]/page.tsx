"use client";
import { fetcher } from "@/components/fetcher";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import RatingSection from "@/components/product-details/ratingSection";

import CategoryList from "@/components/categoryList/categoryList";
import { ProductList } from "@/components/productList/productList";



interface Product {
  uploadedPhotos: string[];
  _id: string;
  name: string;
  size: string[];
  price: number;
  tag: string;
  addinfo: string;
}

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const id = params.productId;

  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isReviewVisible, setIsReviewVisible] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const [product, setProduct] = useState<Product>({} as Product);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const router = useRouter();

  interface ProductData {
    _id: string;
    name: string;
    size: string;
    images: string;
    price: number;
    uploadedPhotos: string;
  }

  useEffect(() => {
    fetcher(`/product/${id}`, "GET").then((data) => setProduct(data));
  }, [product]);

  const addToCart = async () => {

  const router = useRouter();

  useEffect(() => {
    fetcher(`/product/${id}`, "GET").then((data) => {
      setProduct(data);
      setTotalPrice(data?.price);
    });
  }, [id]);

  const addToCart = async (id: string) => {

    const cookie = Cookies.get("token");

    if (!cookie) {
      alert("Сагсанд нэмэхийн тулд хэрэглэгч та нэвтрэх шаардлагатай!");
      router.push("/login");
      return;
    } else {
      try {

        const productId = params.productId;
        const fromLocal = localStorage.getItem("");
        // const cart = JSON.parse( localStorage.getItem('cartProducts'));

        // cart.push({asdasdasdas})

        // const userData = {
        //   size: selectedSize,
        //   qty: selectedCount,
        // };
        // localStorage.setItem("userInfo", JSON.stringify(userData));
        // localStorage.setItem("cartProducts", JSON.stringify(cart));

        const token = Cookies.get("token") || "";
        const decodedToken = jwtDecode(token);
        console.log("data recorded");
      } catch {
        console.log("error");
        console.log("error");
      }
    }
  };
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
    }
  };

  const toggleReviews = () => {
    setIsReviewVisible((prev) => !prev);
  };

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
            src={product.uploadedPhotos[0]}
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
                  className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                  onClick={() => handleQuantityChange(-1)} // Decrement quantity
                >
                  -
                </button>
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


            <button
              className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]"
              onClick={addToCart}
            >
              Сагсанд нэмэх
            </button>
            <RatingSection />
            {isReviewVisible && (
              <div className="pt-4">
                <div>No reviews yet.</div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="text-black font-bold text-3xl pt-[80px]">
        Холбоотой бараа

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
    </div>
  );
}