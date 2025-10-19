import React from "react";
import { burger2Img, pizza2Img, pastaImg, friesImg, pizza3Img, pizza4Img, tastyImg, tasty2Img, pasta2Img } from "../utils/image";
import { useNavigate } from "react-router-dom";
import MenuCard from "./MenuCard";

export default function MenuList() {
  const navigate = useNavigate()
  const menuList = [
    {
      name: "Delicious Pizza",
      price: 20,
      img: pizza2Img,
      category: "Pizza",
    },
    {
      name: "Delicious Burger",
      price: 15,
      img: burger2Img,
      category: "Burger",
    },
    {
      name: "Delicious Pizza",
      price: 17,
      img: pizza3Img,
      category: "Pizza",
    },
    {
      name: "Delicious Pasta",
      price: 18,
      img: pastaImg,
      category: "Pasta",
    },
    {
      name: "French Fries",
      price: 10,
      img: friesImg,
      category: "Fries",
    },
    {
      name: "Delicious Pizza",
      price: 15,
      img: pizza4Img,
      category: "Pizza",
    },
    {
      name: "Tasty Burger",
      price: 12,
      img: tastyImg,
      category: "Burger",
    },
    {
      name: "Tasty Burger",
      price: 14,
      img: tasty2Img,
      category: "Burger"
    },
    {
      name: "Delicious Pasta",
      price: 10,
      img: pasta2Img,
      category: "Pasta"
    }
  ];

  const navigateToMenu = () => {
    navigate("/menu")
  }

  const categories = ["All", "Burger", "Pizza", "Pasta", "Fries"];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dance-font">
          Our Menu
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full "
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {menuList.map((item, index) => (
            <MenuCard item={item} />
          ))}
        </div>
        <div onClick={navigateToMenu} className="flex justify-center mt-10">
          <button className="bg-yellow-500 hover:bg-yellow text-white px-6 py-3 rounded-full font-semibold">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}