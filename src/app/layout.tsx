import type { Metadata } from "next";
import { ReadonlyPropsWithChildren } from "src/utils/types";
import Providers from "./providers";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries and Capitals",
  description: "Leno - Countries and Capitals",
};

export default function RootLayout({ children }: ReadonlyPropsWithChildren) {
  return (
    <html lang="en">
      <Box
        className={inter.className}
        component="body"
        sx={{
          overflowX: "hidden",
          maxWidth: "100vw",
          height: "100%",
        }}
      >
        <Providers>{children}</Providers>
      </Box>
    </html>
  );
}
