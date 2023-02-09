import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { mealHttp } from "../axios.config";
import { singleFood } from "../types";

const fetchBySearch = async ({ queryKey }: { queryKey: string[] }) => {
  const { data } = await mealHttp.get("/search.php?s=" + queryKey[0]);
  return data;
};

const useFetchBySearch = (
  searchParam: string
): { data: singleFood[]; status: string } => {
  const { data, status }: UseQueryResult<{ meals: singleFood[] }> = useQuery(
    searchParam,
    fetchBySearch
  );

  return { data: data?.meals as singleFood[], status };
};

export default useFetchBySearch;
