import { useQuery } from "@tanstack/react-query";
import { get } from "../api/client";

const PARTNERS_QUERY = {
  partners: "partners",
};

export const useGetAllPartners = () =>
  useQuery({
    queryKey: [PARTNERS_QUERY.partners],
    queryFn: () => get({ url: "api/v1/settings/partners/list-create" }),
    refetchOnWindowFocus: true,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response;
    },
  });
