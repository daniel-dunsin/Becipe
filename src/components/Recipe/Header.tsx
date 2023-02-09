import React, { FC } from "react";

type RecipeHeaderProps = {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  tags: string[];
};

const RecipeHeader: FC<RecipeHeaderProps> = ({
  strMeal,
  strMealThumb,
  strTags,
  tags,
}) => {
  return (
    <header className="flex gap-y-6 py-8 gap-x-8 md:flex-row flex-col w-[90%] max-w-[900px] mx-auto">
      {/* image container */}
      <div className="w-full flex-[0.4] min-w-[300px] min-h-[300px] max-h-[300px] flex justify-center items-center relative mb-6">
        <div className="bg-gray-300 rounded-xl w-full h-full absolute top-0 left-0 -rotate-[6deg] z-[0]"></div>
        <img
          src={strMealThumb}
          alt={strMeal}
          loading="lazy"
          className="w-[95%] h-[95%] absolute top-[50%] left-[50%] -translate-y-[50%] object-cover object-center -translate-x-[50%] rounded-xl "
        />
      </div>
      <div className="flex-[0.6] w-full">
        {tags?.length > 0 && (
          <header className="flex gap-x-2 items-center">
            <span className="block px-4 py-1 font-bold text-[15px] rounded-sm bg-[#fcb64fa9] text-[#332922] max-w-fit shadow-sm cursor-pointer">
              {tags[0]}
            </span>
          </header>
        )}
        <h1 className="mt-4 md:mt-8 font-[500] text-[26px] md:text-[48px]">
          {strMeal}
        </h1>
      </div>
    </header>
  );
};

export default RecipeHeader;
