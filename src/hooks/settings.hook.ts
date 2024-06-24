import { useQuery } from "@tanstack/react-query";
import { get } from "../api/client";

const QUERY_KEY = {
  settings: "settings",
};

export const useGetSettingsDetails = () =>
  useQuery({
    queryKey: [QUERY_KEY.settings],
    queryFn: () =>
      get({
        url: `api/v1/settings/list
    `,
      }),
    refetchOnWindowFocus: true,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response;
    },
  });
