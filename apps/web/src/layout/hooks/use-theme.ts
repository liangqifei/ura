import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { onMounted, ref } from "vue";
enum ThemeType {
  "default" = 'theme-default',
  "mauve" = 'theme-default'
}
export const changeThemeHooks = () => {
  const changeTheme = (themeValue = ThemeType.default) => {
    toggleTheme({
      scopeName: themeValue,
    });
  }
  const themes = ThemeType
  return {
    changeTheme,
    themes
  }
}