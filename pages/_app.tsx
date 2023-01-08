import "../styles/index.scss";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "fallback",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
