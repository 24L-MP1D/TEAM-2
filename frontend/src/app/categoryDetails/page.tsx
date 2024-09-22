'use client'
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";



export default function ProductDetails() {

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedCount, setSelectedCount] = useState(0);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [filledStars, setFilledStars] = useState<number>(0);
  const [isReviewVisible, setIsReviewVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');


  const [products, setProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<Set<string>>(new Set());

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
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/products.json');
        const data: Product[] = await res.json();
        setProducts(data);
        setSelectedProduct(data[0]); 
        setSelectedImage(data[0].images); 
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load product data.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const toggleReviews = () => {
    setIsReviewVisible(!isReviewVisible);
  };

  return (
    <div>
      <div className="flex gap-5 pt-[52px]">
        <div className="pt-[95px] flex flex-col gap-2">
        {products.slice(0, 4).map((product) => (
            <Image
              key={product._id}
              src={product.images}
              className="w-[67px] h-[67px] rounded cursor-pointer"
              width={67}
              height={67}
              alt={product.productName}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedImage(product.images);
              }}
            />
          ))}
        </div>

        {selectedImage && (
          <Image
            src={selectedImage}
            alt={selectedProduct?.productName || 'Product Image'}
            className="w-[422px] h-[521px] rounded-2xl"
            width={422}
            height={521}
          />
        )}

        {selectedProduct && (
          <div className="pt-[100px]">
            <button
              type="button"
              className="px-[10px] border-[#2563EB] border-[1px] text-[#09090B] rounded-full"
            >
              New
            </button>
            <div className="flex gap-4 items-center pt-2">
              <h2 className="font-bold text-2xl text-black">
                {selectedProduct.productName}
              </h2>
              <Heart
                color={isSaved ? "black" : "black"}
                fill={isSaved ? "black" : "none"}
                onClick={() => setIsSaved(!isSaved)}
              />
            </div>

            <h3 className="font-normal text-base text-[#000000] pt-2">
              {selectedProduct.description}
            </h3>
            <h3 className="font-normal text-[#000000] text-sm pt-4">
            Хэмжээний заавар 
            </h3>
            <div className="pt-4 flex gap-2">
            {/* <div className="pt-4 flex gap-2">
              {selectedProduct.size.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`border-[#18181B] border-[1px] rounded-2xl w-12 h-8 font-normal text-lg 
                    ${selectedSize === size ? 'bg-[#2563EB] text-white' : 'bg-[#FFFFFF] text-[#09090B]'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div> */}
            </div>

            <div className="pt-4 flex gap-2 items-center">
              <button
                type="button"
                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                onClick={() => setSelectedCount((prevCount) => Math.max(prevCount - 1, 0))}
              >
                -
              </button>
              <div className="text-black text-xs">{selectedCount}</div>
              <button
                type="button"
                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                onClick={() => setSelectedCount(selectedCount + 1)}
              >
                +
              </button>
            </div>

            <div className="font-bold text-xl text-[#000000] pt-6">
              {selectedProduct.price} ₮
            </div>
            <button className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]">
            Сагсанд нэмэх
            </button>

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

            {isReviewVisible && (
              <div className="pt-4">
               
                <div>No reviews yet.</div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="text-black font-bold text-3xl pt-[80px]">Холбоотой бараа</div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-12 overflow-hidden pt-6 ">
        {products.slice(0,8).map((product, index) => (
          <div
            key={product._id}
            
          >
            <div className="overflow-hidden relative  w-[244px] h-[331px] rounded-xl">
              <Image
                src={product.images}
                alt={product.productName}
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
              {product.description}
            </p>
            <p className="text-[#000000] text-base font-bold pt-1">
              {product.price} ₮
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}