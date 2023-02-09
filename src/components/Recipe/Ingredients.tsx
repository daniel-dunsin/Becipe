import React, { FC } from "react";
import { singleFood } from "../../types";
import { FaRegDotCircle } from "react-icons/fa";

const RecipeIngredients: FC<singleFood> = (props) => {
  const ingredients = Object.keys(props)
    ?.filter((prop) => prop.toLowerCase().includes("ingredient"))
    ?.map((ingredient) => props[ingredient as keyof singleFood])
    ?.filter((ingredient) => ingredient);
  const measures: (string | number)[] = Object.keys(props)
    ?.filter((prop) => prop.toLowerCase().includes("measure"))
    ?.map((measure) => props[measure as keyof singleFood])
    ?.filter((measure) => measure as string);
  return (
    <section className="md:mt-8 w-[90%] max-w-[900px] mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-[24px] font-[500]">Ingredients</h1>
      <div className="flex flex-col gap-y-2 w-full mt-3">
        {ingredients.map((ingredient, index: number) => {
          return (
            <span key={index} className="flex items-center gap-x-2 text-[15px]">
              <i className="text-[14px] font-light text-green-500">
                <FaRegDotCircle />
              </i>
              <p>
                {measures[index].toString().toLowerCase().includes("to serve")
                  ? measures[index]
                  : measures[index] + " of"}
                <p className="font-bold inline-block ml-1">{ingredient}</p>
              </p>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeIngredients;
