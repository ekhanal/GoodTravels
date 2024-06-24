import { getUser, postUser } from "../api/client";
import { AUTH_COOKIE_CONFIG } from "../constants/common";
import { queryClient } from "../main";
import { getCookie } from "../utils/cookie";
import { getValue } from "../utils/object";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { useMutation, useQuery } from "@tanstack/react-query";

const token = getCookie(AUTH_COOKIE_CONFIG.ACCESS_TOKEN);

const QUERY_KEY = {
  user: "user",
};

export const useGetUserDetails = () =>
  useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: () =>
      getUser({
        url: "api/v1/users/list",
        headers: {
          token: token,
        },
      }),
    select: (response) => {
      return response.results;
    },
  });

export const useUpdateUserDetails = () =>
  useMutation({
    mutationFn: (body: object) =>
      postUser({
        url: "api/v1/users/add-user-detail",
        body,
      }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.user] }),
        showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const usePasswordReset = () =>
  useMutation({
    mutationFn: (body: object) =>
      postUser({
        url: "api/v1/users/change-user-password",
        body,
      }),
  });
