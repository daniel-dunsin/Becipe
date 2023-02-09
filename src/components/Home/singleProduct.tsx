import React, { FC } from "react";
import { ItemsProps } from "./Foods";
import { BiFlag } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleProduct: FC<ItemsProps> = (item) => {
  return (
    <article className="w-full bg-white shadow-md rounded-md">
      {/* image container */}
      <div className="w-[90%] h-[300px] relative bottom-[20px] mx-auto">
        <img
          src={item.strMealThumb}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-md shadow-md"
        />
      </div>

      <div className="w-[90%] mx-auto mb-4">
        <h1 className="font-[500] text-[22px]">{item.strMeal}</h1>
        <Link
          to={`/recipe/${item.idMeal}`}
          className="font-bold text-[15px] text-yellow-600 underline mb-2 cursor-pointer"
        >
          View Recipes
        </Link>
      </div>
    </article>
  );
};

export default SingleProduct;
