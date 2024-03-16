import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),

    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    // staleTime: 1000 * 1, // Testing purpose - 1 second

    // 1. When the network is reconnected
    //refetchOnReconnect: false, // default is true
    //2. When the window is refocused (if we open a new tab and then go back to the previous tab, it will refetch the data again)
    //refetchOnWindowFocus: false, // default is true
    // 3. When a component is mounted
    //refetchOnMount: false, // default is true
    // but it won't refetch automatically even though the data is stale, unless we need to use the data, then it will refetch it

    // To automatically refetch the data when it's stale or not stale, we can use the
    // refetchInterval: 1000 * 60 * 5, // 5 minutes
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
