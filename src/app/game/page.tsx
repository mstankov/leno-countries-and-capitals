// app/posts/page.jsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Game from "./game";
import { getCountriesQueryData } from "src/api/hooks";

export default async function GamePage() {
  const queryClient = new QueryClient();

  // prefetch query, later to be used in the client Game component
  await queryClient.prefetchQuery({
    ...getCountriesQueryData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Game />
    </HydrationBoundary>
  );
}
