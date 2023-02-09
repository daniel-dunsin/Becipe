import React from "react";
import SingleProduct from "./singleProduct";

export type ItemsProps = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string | number;
  strTags: string;
  strArea: string;
};

const items: ItemsProps[] = [
  {
    strMeal: "Fried Yam and Egg",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 699,
    strArea: "Italian",
    strTags: "Yam, Egg",
  },
  {
    strMeal: "Jollof and fried rice",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 6287,
    strArea: "Italian",
    strTags: "Jollof, Rice, Fried",
  },
  {
    strMeal: "Potato shiffa",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 6871,
    strArea: "Italian",
    strTags: "Potato",
  },
  {
    strMeal: "Chicken chips",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 6991,
    strArea: "Italian",
    strTags: "Chicken, Chips",
  },
  {
    strMeal: "Egg roll",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 6992,
    strArea: "Italian",
    strTags: "Snacks, Egg, Rolls",
  },
  {
    strMeal: "Indomie",
    strMealThumb: "/images/pasta.jpg",
    idMeal: 699,
    strArea: "Italian",
    strTags: "pasta, noodles",
  },
];

const Foods = () => {
  return (
    <section className="w-full grid justify-between items-center gap-x-8 gap-y-14 lg:grid-cols-2 grid-cols-1 max-w-[850px] mx-auto my-10">
      {items?.map((item, index: number) => {
        return <SingleProduct key={item?.idMeal} {...item} />;
      })}
    </section>
  );
};

export default Foods;
