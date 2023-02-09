import React, { useEffect, useState } from "react";
import { singleFood } from "../types";
import { mealHttp } from "../axios.config";
import { useQuery, UseQueryResult } from "react-query";

const fetchItems: any = async ({ queryKey }: { queryKey: string }) => {
  console.log(queryKey);
  const { data } =
    queryKey[0].toLowerCase() === "all"
      ? await mealHttp.get("/search.php?s=A")
      : await mealHttp.get("/filter.php?c=" + queryKey[0]);
  return data;
};
const useFetchByCategrory = (
  category: string
): { data: singleFood[]; status: string } => {
  const { data, status }: UseQueryResult<{ meals: singleFood[] }> = useQuery(
    category,
    fetchItems,
    {
      onSuccess: () => {
        console.log("successful");
      },
    }
  );
  return { data: data?.meals as singleFood[], status };
};

export default useFetchByCategrory;
