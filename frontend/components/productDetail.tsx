// 'use client'
// import { Heart, Star } from "lucide-react";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import productData from '../public/productDetails.json'

// interface Review {
//   username: string;
//   stars: number;
//   text: string;
// }

// interface Product {
//   name: string;
//   description: string;
//   price: string;
//   images: string[];
// }

// export default function ProductDetails() {
//   const [selectedSize, setSelectedSize] = useState<string | undefined>(
//     undefined
//   );
//   const [selectedCount, setSelectedCount] = useState(0);
//   const [selectedImage, setSelectedImage] = useState<string>(
//     productData.product.images[0]
//   );
//   const [isSaved, setIsSaved] = useState<boolean>(false);
//   const [isLiked, setIsLiked] = useState<boolean>(false);
//   const [filledStars, setFilledStars] = useState<number>(0);
//   const [isReviewVisible, setIsReviewVisible] = useState<boolean>(false);
//   const [reviews, setReviews] = useState<Review[]>(productData.reviews);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const getProduct = () => {
//     fetch('/productDetails.json').then((res) => res.json()).then(console.log)
//   }
//   getProduct()

//   const images = productData.product.images;

//   const toggleReviews = () => {
//     setIsReviewVisible(!isReviewVisible);
//   };

//   return (
//     <>
//       <div className="flex gap-5">
//         <div className="pt-[95px] flex flex-col gap-2">
//           {images.map((img, index) => (
//             <Image
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index + 1}`}
//               className="w-[67px] h-[67px] rounded cursor-pointer "
//               width={67}
//               height={67}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//         <Image
//           src={selectedImage}
//           alt="My Image"
//           className="w-[422px] h-[521px] rounded-2xl "
//           width={422}
//           height={521}
//         />
//         <div className="pt-[100px] ">
//           <button
//             type="button"
//             className=" px-[10px] border-[#2563EB] border-[1px] text-[#09090B] rounded-full"
//           >
//             шинэ
//           </button>
//           <div className="flex gap-4 items-center pt-2">
//             <h2 className="font-bold text-2xl text-black">
//               {productData.product.name}
//             </h2>
//             <Heart
//               color={isSaved ? "red" : "black"}
//               fill={isSaved ? "red" : "none"}
//               onClick={() => setIsSaved(!isSaved)}
//             />
//           </div>

//           <h3 className="font-normal text-base text-[#000000] pt-2">
//             {productData.product.description}
//           </h3>
//           <h3 className="font-normal  text-[#000000] text-sm pt-4">
//             Хэмжээний заавар
//           </h3>

//           <div className="flex gap-1 pt-2">
//             {/* {productData.sizes.map((size) => (
//               <button
//                 key={size}
//                 type="button"
//                 onClick={() => setSelectedSize(size)}
//                 className={${
//                   selectedSize === size
//                     ? "bg-[#18181B] text-white"
//                     : "bg-[#FFFFFF] text-[#09090B]"
//                 } border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-xs}
//               >
//                 {size}
//               </button>
//             ))} */}
//           </div>
//           <div className="pt-4 flex gap-2 items-center">
//             <button
//               type="button"
//               className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B] "
//               onClick={() =>
//                 setSelectedCount((prevCount) => Math.max(prevCount - 1, 0))
//               }
//             >
//               -
//             </button>
//             <div className="text-black text-xs"> {selectedCount} </div>
//             <button
//               type="button"
//               className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
//               onClick={() => setSelectedCount(selectedCount + 1)}
//             >
//               +
//             </button>
//           </div>
//           <div className="font-bold text-xl text-[#000000] pt-6">
//             {productData.product.price}
//           </div>
//           <button className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]">
//             Сагсанд нэмэх
//           </button>

//           <div className="flex gap-4  pt-[55px]">
//             <div className="text-[#09090B] text-sm">Үнэлгээ</div>
//             <a
//               className="text-[#2563EB] text-sm underline underline-offset-1 cursor-pointer"
//               onClick={toggleReviews}
//             >
//               бүгдийг харах
//             </a>
//           </div>
//           <div className="flex">
//             {[0, 1, 2, 3, 4].map((index) => (
//               <Star
//                 key={index}
//                 color="yellow"
//                 fill={index < filledStars ? "yellow" : "white"}
//                 onClick={() => setFilledStars(index + 1)}
//                 style={{ cursor: "pointer" }}
//               />
//             ))}
//             <div className="text-black">4.6 (24)</div>
//           </div>


//           {isReviewVisible && (
//             <div className="pt-4">
//               {reviews.map((review, index) => (
//                 <div key={index} className="pt-2">
//                   <div className="flex items-center gap-2">
//                     <div className="font-bold">{review.username}</div>
//                     {[...Array(review.stars)].map((_, i) => (
//                       <Star key={i} color="yellow" fill="yellow" />
//                     ))}
//                   </div>
//                   <p>{review.text}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
