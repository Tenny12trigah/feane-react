import React from "react";
import { burgerImg} from "../utils/image";
import { pizzaImg} from "../utils/image";

export default function Promo() {

const promoList = [{
  name: "Tasty Thursdays",
  discount: "20",
  img: burgerImg,
}
 ,{
  name: "Pizza Days",
  discount: "15",
  img: pizzaImg,
 }

]

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {promoList.map((promo, index)=>(
                  <div className="bg-dark text-white flex items-center rounded-lg p-6">
          

          <img
            src={promo.img}
            alt="Burger"
            className="border-yellow border-4 w-24 h-24 object-cover rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl dance-font font-semibold"> {promo.name}</h3>
            <p className="text-2xl dance-font font-bold">
            {promo.discount}% <span className="text-sm">Off</span>
            </p>
            <button className="mt-9 bg-yellow-500 text-white px-4 py-3 pr-15 rounded-4xl">
              Order Now 
            </button>
          </div>
        </div>

        ))}




      </div>
    </section>
  );
}