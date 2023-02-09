import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { mealHttp } from "../axios.config";
import { singleFood } from "../types";

const fetchItem = async ({ queryKey }: { queryKey: Array<string> }) => {
  const { data } = await mealHttp.get("/lookup.php?i=" + queryKey[0]);
  return data;
};

const useFetchSingleItem = (
  id: string | number
): { data: singleFood; status: string } => {
  const { data, status }: UseQueryResult<{ meals: singleFood[] }> = useQuery(
    id as string,
    fetchItem
  );
  return { data: data?.meals?.[0] as singleFood, status: status };
};

export default useFetchSingleItem;
