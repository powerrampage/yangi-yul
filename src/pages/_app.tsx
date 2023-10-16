import { useEffect } from "react";
import { ConfigProvider } from "antd";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/assets/sass/main.scss";
import theme from "@/theme/themeConfig";
import RootLayout from "@/components/RootLayout";
import * as eimzoService from "@/services/eimzo";

const ProximaNova = localFont({
  src: [
    {
      path: "../assets/font/Inter/Inter-Bold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Inter/Inter-Regular.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/font/Inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/Inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    eimzoService.startApi();
  }, []);

  return (
    <div className={ProximaNova.className}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
