import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "react-multi-carousel/lib/styles.css";
import Meta from "@/app/Meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Moonlit English | Ms Nguyet Phan",
    default: "Moonlit English | Ms Nguyet Phan",
  },
  description: "Learning English with Ms Nguyet Phan",
  icons: "/favico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Meta />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
