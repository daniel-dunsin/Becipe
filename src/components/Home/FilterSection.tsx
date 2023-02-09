import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { categories } from "../../static/categories";

const FilterSection = () => {
  const [categoryFilterOpen, setCategoryFilterOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<"all" | string>("all");
  const toggleCategoryFilter = () => {
    setCategoryFilterOpen((prev) => !prev);
  };
  const closeCategoryFilter = () => {
    setCategoryFilterOpen(false);
  };
  const selectCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <section className="mt-14 w-[90%] max-w-[850px] mx-auto rounded-md shadow-md flex items-center gap-4 md:flex-row flex-col bg-white px-6 py-4">
      <p className="text-gray-600 text-[14px] font-bold cursor-pointer">
        FILTER
      </p>
      <div className="relative flex-1 w-full">
        <article
          className={
            styles.filterContainer +
            "relative cursor-pointer flex items-center justify-between gap-6 w-full"
          }
          onClick={toggleCategoryFilter}
        >
          {category.toLowerCase() === "all" ? "All Categories" : category}

          <span className="text-[18px]">
            {categoryFilterOpen ? <BiChevronUp /> : <BiChevronDown />}
          </span>
          {categoryFilterOpen && (
            <main className="absolute z-[6] top-[105%] left-0 w-full bg-gray-100 flex flex-col rounded-md overflow-x-hidden overlow-y-scroll max-h-[200px] shadow-md">
              {categories.map((category: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-600"
                  onClick={() => {
                    <main className="absolute top-[105%] left-0 w-full bg-gray-100 flex flex-col rounded-md overflow-x-hidden overlow-y-scroll max-h-[200px] shadow-md">
                      {categories.map((category: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-600"
                          onClick={() => {
                            closeCategoryFilter();
                            selectCategory(category);
                          }}
                        >
                          {category}
                        </span>
                      ))}
                    </main>;
                    selectCategory(category);
                  }}
                >
                  {category}
                </span>
              ))}
            </main>
          )}
        </article>
      </div>
      <form className="flex flex-1 gap-2">
        <input
          className={styles.filterContainer + "flex-1 w-full"}
          type="text"
          placeholder="Search food item"
        />
        <button
          type="submit"
          className="w-[60px] rounded-xl cursor-pointer bg-gray-100 flex justify-center items-center border-[1.5px] font-bold text-[17px] text-yellow-600"
        >
          <BiSearch />
        </button>
      </form>
    </section>
  );
};

const styles = {
  filterContainer:
    "px-4 py-3 rounded-md bg-gray-100 text-[14px] text-gray-600 font-bold border-[1.5px] focus:border-yellow-600 outline-none focus:outline-none",
};

export default FilterSection;
