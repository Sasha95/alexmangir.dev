import { useTheme } from "next-themes";

export const useImageTheme = (img: string, darkImg: string) => {
  const { theme } = useTheme();
  const src = theme === "dark" ? darkImg : img;
  return src;
};
