import { get } from "../api/client";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  packages: "packages",
  activities: "activities",
  ageGroups: "ageGroups",
  tourTypes: "tourTypes"
};

export const useGetAllActivities = () =>
  useQuery({
    queryKey: [QUERY_KEY.activities],
    queryFn: () => get({ url: "api/v1/packages/activities/list" }),
  });

export const useGetAllTourType = () =>
  useQuery({
    queryKey: [QUERY_KEY.tourTypes],
    queryFn: () => get({ url: "api/v1/packages/tour-types/list" }),
    refetchOnWindowFocus: false,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response.results;
    },
  });

export const useGetAllAgeGroup = () =>
  useQuery({
    queryKey: [QUERY_KEY.ageGroups],
    queryFn: () => get({ url: "api/v1/packages/agegroups/" }),
    refetchOnWindowFocus: false,
    staleTime: 1000,
    retry: 3,
    select: (response) => {
      return response.results;
    },
  });
