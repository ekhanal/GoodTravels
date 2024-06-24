import { useMutation, useQuery } from "@tanstack/react-query";
import { get, post } from "../api/client";

import { queryClient } from "../main";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { getValue } from "../utils/object";

const CONTACT_QUERY = {
  contact: "contact",
};

export const useGetAllContactsMessage = () =>
  useQuery({
    queryKey: [CONTACT_QUERY.contact],
    queryFn: () => get({ url: "api/v1/settings/inquiries-message/" }),
    select: (response) => {
      return response.results;
    },
  });

export const useCreateContactMessage = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({ url: "api/v1/settings/inquiries-message/", body }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY.contact] }),
        showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
