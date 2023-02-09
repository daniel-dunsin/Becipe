import React, { FC } from "react";
import { singleFood } from "../../types";

const RecipeInstructions: FC<singleFood> = ({ strInstructions }) => {
  const instructions: string[] = strInstructions
    ?.split(".")
    .filter((instruction) => instruction);
  console.log(instructions);
  return (
    <section className="md:mt-8 w-[90%] max-w-[900px] mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-[24px] font-[500]">Instructions</h1>
      <div className="flex flex-col gap-y-4 w-full mt-3">
        {instructions?.map((instruction, index: number) => {
          return (
            <div key={index}>
              <span className="block px-4 py-1 font-bold text-[15px] rounded-sm bg-[#fcb64fa9] text-[#332922] max-w-fit shadow-sm cursor-pointer">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <p className="text-[16px] mt-1">{instruction}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeInstructions;
