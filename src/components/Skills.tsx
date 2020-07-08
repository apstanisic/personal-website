import { h } from "preact";
import codeImage from "../assets/code.png";
import { useContext } from "preact/hooks";
import { ThemeContext } from "../core/theme";

export function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="skills"
      className="px-4 mx-auto center"
      style={{ ...(theme === "light" ? { backgroundColor: "#373740" } : {}) }}
    >
      <img src={codeImage} alt="skills" className="w-full mx-auto" style={{ maxWidth: 500 }} />
    </div>
  );
}

/*
This interface is sketch for image

class Skills {
  javaScript = ['react', 'vue'];
  typeScript = true;
  node = ['express', 'nestJs', 'koa'];
  flutter = true;
  php = ['laravel', 'wordPress'];
  dotnetCore = true;
  additional = ['linux', 'git'];
}
*/
