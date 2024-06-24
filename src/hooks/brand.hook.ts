import { get } from "../api/client";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  brand: "brand",
};

export const useGetAllBrands = () =>
  useQuery({
    queryKey: [QUERY_KEY.brand],
    queryFn: () => get({ url: "api/v1/settings/brands/" }),
  });