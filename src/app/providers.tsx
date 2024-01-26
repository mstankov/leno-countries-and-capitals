"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReadonlyPropsWithChildren } from "src/utils/types";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function Providers({ children }: ReadonlyPropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // avoid refetching immediately on the client
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        {children}
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}
