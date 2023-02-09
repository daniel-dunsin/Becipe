import React, { FC } from "react";

type RecipeTagsProps = {
  tags: string[];
};

const RecipeTags: FC<RecipeTagsProps> = ({ tags }) => {
  return (
    <section className="md:mt-8 w-[90%] max-w-[900px] mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-[24px] font-[500]">Tags</h1>
      <div className="flex items-center flex-row gap-x-4 mt-4">
        {tags?.map((tag, index) => {
          return (
            <span
              className="block px-4 py-1 font-bold text-[15px] rounded-sm bg-[#fcb64fa9] text-[#332922] max-w-fit shadow-sm cursor-pointer"
              key={index}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeTags;
