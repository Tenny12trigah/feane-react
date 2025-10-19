import React from 'react'

const MenuCard = ({item}) => {
  return (
    <div
              className="bg-dark shadow-xl text-white rounded-lg overflow-hidden"
            >
              <div className="bg-milkywhite rounded-bl-3xl h-55 flex justify-center items-center">
              <img
                src={item.img}
                className=" h-32 hover:h-34 "
              />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300">
                  Veniam debitis quaerat officiis quasi cupiditate quo,
                  quisquam velit, magnam voluptatem repellendus sed eaque
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-white text-lg">${item.price}</span>
                </div>
              </div>
            </div>
  )
}

export default MenuCard