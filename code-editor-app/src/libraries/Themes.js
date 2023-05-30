import { loader } from "@monaco-editor/react";

const monacoThemes = {
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  clouds: "Clouds",
  twilight: "Twilight",
  github: "GitHub",
  "solarized-dark": "Solarized-dark",
};
const Themes = (theme) => {
  return new Promise((resolve) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.Themes(theme, themeData);
      resolve();
    });
  });
};

export { Themes };
