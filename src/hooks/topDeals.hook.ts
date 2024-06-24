import { get } from "../api/client";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  topDeals: "topDeals",
};

export const useGetAllDeals = () =>
  useQuery({
    queryKey: [QUERY_KEY.topDeals],
    queryFn: () => get({ url: "api/v1/packages/top-deals-count/" }),
  });

export const useGetAllDealsList = (id: string) =>
  useQuery({
    queryKey: [QUERY_KEY.topDeals, id],
    queryFn: () =>
      get({ url: `api/v1/packages/list/top-deals/${id}/by/package` }),
  });
