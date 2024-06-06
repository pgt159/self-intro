import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "react-multi-carousel/lib/styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Moonlit English | Ms Nguyet Phan",
    default: "Moonlit English | Ms Nguyet Phan",
  },
  description: "Learning English with Ms Nguyet Phan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
