import React, { FC } from "react";
import { ItemsProps } from "./Foods";
import { BiFlag } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleProduct: FC<ItemsProps> = (item) => {
  const tags: string[] =
    item.strTags.split(",").length > 4
      ? item.strTags.split(",").slice(0, 4)
      : item.strTags.split(",");
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
        <div className="absolute bottom-0 left-[12px] w-full flex gap-2">
          {tags.map((tag: string, index: number) => {
            return (
              <span className="block px-2 py-1 rounded-md text-[#4b1100f3] font-bold capitalize text-[14px] cursor-pointer border bg-yellow-600">
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-[90%] mx-auto mb-0">
        <h1 className="font-[500] text-[22px]">{item.strMeal}</h1>
        <Link
          to={`/recipe/${item.idMeal}`}
          className="font-bold text-[15px] text-yellow-600 underline mb-2 cursor-pointer"
        >
          View Recipes
        </Link>
      </div>
      <footer className="py-3 bg-yellow-600 text-white font-light rounded-b-md">
        <div className="flex items-center gap-2 w-[90%] mx-auto">
          <span>
            <BiFlag />
          </span>
          {item.strArea}
        </div>
      </footer>
    </article>
  );
};

export default SingleProduct;
