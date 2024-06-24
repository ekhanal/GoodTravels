import { useQuery } from "@tanstack/react-query";
import { get } from "../api/client";

const FAQ_QUERY = {
  faq: "faq",
};

export const useGetAllFaqs = () =>
  useQuery({
    queryKey: [FAQ_QUERY.faq],
    queryFn: () => get({ url: "api/v1/settings/faq/list-create" }),
    select: (response) => {
        return response.results;
      },
  });
