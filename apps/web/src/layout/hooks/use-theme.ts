import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
enum ThemeType {
  "default" = "theme-default",
  "mauve" = "theme-mauve",
}
export const changeThemeHooks = () => {
  const changeTheme = (themeValue = ThemeType.default) => {
    toggleTheme({
      scopeName: themeValue,
    });
  };
  const themes = ThemeType;
  return {
    changeTheme,
    themes,
  };
};
