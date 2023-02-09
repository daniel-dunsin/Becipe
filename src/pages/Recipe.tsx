import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/Recipe/Header";
import RecipeIngredients from "../components/Recipe/Ingredients";
import RecipeInstructions from "../components/Recipe/Instructions";
import RecipeTags from "../components/Recipe/Tags";
import useFetchSingleItem from "../hooks/useFetchSingleItem";
import { singleFood } from "../types";

const Recipe = () => {
  const [singleRecipe, setSingleRecipe] = useState<singleFood>();
  const { id } = useParams();
  const { data, status } = useFetchSingleItem(id as string);

  useEffect(() => {
    console.log(status);
    if (status === "success") {
      setSingleRecipe(data);
    }
  }, [id, status]);

  if (status === "loading" && !singleRecipe) {
    return <p>Loading...</p>;
  }
  const tags: any = singleRecipe?.strTags?.split(",");
  return (
    <main className="flex-1 min-h-screen md:ml-[300px] py-8">
      {/* header */}
      <RecipeHeader
        strMeal={singleRecipe?.strMeal as string}
        strMealThumb={singleRecipe?.strMealThumb as string}
        strTags={singleRecipe?.strTags as string}
        tags={tags as string[]}
      />
      <RecipeIngredients {...(singleRecipe as singleFood)} />
      <RecipeInstructions {...(singleRecipe as singleFood)} />
      <RecipeTags tags={tags} />
    </main>
  );
};

export default Recipe;
