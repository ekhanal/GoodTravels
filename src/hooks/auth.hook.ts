import { get, post } from "../api/client";
import { getValue } from "../utils/object";

import { useMutation } from "@tanstack/react-query";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () =>
  useMutation({
    mutationFn: (body: object) => post({ url: "api/v1/users/register", body }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useLoginAccount = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({ url: "api/v1/users/api/token/", body }),
  });

export const useVerifyAccount = (token: string) => {
  const route = useNavigate();
  return useMutation({
    mutationFn: () => {
      return get({ url: `api/v1/users/verify-email/${token}` });
    },
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
      route("/");
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "err")),
  });
};

export const useForgotPassword = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/users/password/reset",
        body,
      }),
  });

export const useForgotPasswordConfirm = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/users/password/reset/conform",
        body,
      }),
  });
