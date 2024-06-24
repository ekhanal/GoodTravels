import {  postUser } from "../api/client";
import { useMutation } from "@tanstack/react-query";

export const useCreateBooking = () =>
  useMutation({
    mutationFn: ({ id, body }: { body: object; id: string }) =>
      postUser({ url: `api/v1/bookings/package/${id}/create`, body }),
  });
