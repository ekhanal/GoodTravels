import { get, post, postUser } from "../api/client";
import { getValue } from "../utils/object";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../main";

const QUERY_KEY = {
  packages: "packages",
  inquiry: "inquiry",
  tourType: "tourType",
  destination: "destination",
};

export const useGetAllDestinationFilter = (name?: string) =>
  useQuery({
    queryKey: [QUERY_KEY.destination, name],
    queryFn: () => get({ url: `api/v1/location/destinations/?name=${name}` }),
    select: (response) => {
      return response.results;
    },
  });

  export const useGetAllDestination = () =>
    useQuery({
      queryKey: [QUERY_KEY],
      queryFn: () => get({ url: `api/v1/location/destinations/` }),
      select: (response) => {
        return response.results;
      },
    });

export const useGetAllPackages = (
  location?: string,
  tourType?: string[],
  ageType?: string[],
  activities?: string
) =>
  useQuery({
    queryKey: [QUERY_KEY.packages, location, tourType, ageType],
    queryFn: () => {
      const encodedTourTypes =
        tourType && tourType.length > 0
          ? tourType
              .map((type) => `tour_type=${encodeURIComponent(type.trim())}`)
              .join("&")
          : "";

      const encodedAgeTypes =
        ageType && ageType.length > 0
          ? `${ageType
              .map((type) => `age_range=${encodeURIComponent(type.trim())}`)
              .join("&")}`
          : "";

      const encodedActivities = activities
        ? `activity=${encodeURIComponent(activities.trim())}`
        : "";

      const url = `api/v1/packages/list?location=${encodeURIComponent(
        location ? location.trim() : ""
      )}${encodedTourTypes && `&${encodedTourTypes}`}${
        encodedAgeTypes && `&${encodedAgeTypes}`
      }${encodedActivities && `&${encodedActivities}`}`;

      return get({ url });
    },
    refetchOnWindowFocus: false,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response.results;
    },
  });

export const useGetAllPackage = () =>
  useQuery({
    queryKey: [QUERY_KEY.packages],
    queryFn: () => get({ url: "api/v1/packages/cms/list" }),
  });

export const useGetAllDestinationPackage = () =>
  useQuery({
    queryKey: [QUERY_KEY.destination],
    queryFn: () => get({ url: "api/v1/packages/destinations/list/packages" }),
    select: (response) => response || [], // Ensure the response is an array or return an empty array
  });

export const useGetAllTourTypePackage = () =>
  useQuery({
    queryKey: [QUERY_KEY.tourType],
    queryFn: () => get({ url: "api/v1/packages/tour-types/list/packages" }),
  });

export const useGetSinglePackageDetails = (id: string) =>
  useQuery({
    queryKey: [QUERY_KEY.packages, id],
    queryFn: () => get({ url: `api/v1/packages/${id}/detail` }),
    refetchOnWindowFocus: false,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response;
    },
  });

export const useCreatePackages = () =>
  useMutation({
    mutationFn: (body: object) => post({ url: "api/v1/packages", body }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.packages] }),
        showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useCreateEnquiry = () =>
  useMutation({
    mutationFn: ({ id, body }: { body: object; id: string }) =>
      postUser({ url: `api/v1/bookings/${id}/inquiry/create`, body }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.inquiry] }),
        showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
