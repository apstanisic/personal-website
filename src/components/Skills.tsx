import { h } from 'preact';
import { ThemeState } from '../core/state';
import codeImage from '../assets/code.png';

export default function Skills() {
  const { theme } = ThemeState.useContainer();

  return (
    <div
      id="skills"
      className="px-4 mx-auto center"
      style={{ ...(theme === 'light' ? { backgroundColor: '#373740' } : {}) }}
    >
      <img
        src={codeImage}
        alt="skills"
        className="w-full mx-auto"
        style={{
          maxWidth: 500,
        }}
      />
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
