import { postUser } from "../api/client";
import { useMutation } from "@tanstack/react-query";



export const useCreateRating = () =>
  useMutation({
    mutationFn: ({ body, id }: { body: object; id: string }) =>
      postUser({ url: `api/v1/bookings/package/${id}/review`, body }),
  });
