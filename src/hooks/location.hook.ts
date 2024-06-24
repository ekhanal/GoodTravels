import { useQuery } from "@tanstack/react-query";
import { get } from "../api/client";

const ROLE_QUERY = {
  country: "country",
};

export const useGetAllCountry = () =>
  useQuery({
    queryKey: [ROLE_QUERY.country],
    queryFn: () => get({ url: "api/v1/location/countries/list" }),
    select: (response) => {
      return response.results;
    },
  });
