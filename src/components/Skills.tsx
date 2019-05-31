import { h } from 'preact';
import { ThemeState } from '../core/state';
import code from '../assets/code.png';

// This interface is sketch for image
interface Skills {
  javaScript: true;
  react: true;
  vue: true;
  typeScript: true;
  nodeJs: ['express', 'nestJs', 'koa', 'typeOrm'];
  flutter: true;
  php: ['laravel', 'wordPress'];
  dotnetCore: true;
  additional: ['linux', 'git'];
}

export default function Skills() {
  const { theme } = ThemeState.useContainer();

  return (
    <div
      className="px-4 container mx-auto"
      style={{ ...(theme === 'light' ? { backgroundColor: '#1d2021' } : {}) }}
    >
      <img
        src={code}
        alt="skills"
        className="w-full mx-auto"
        style={{
          maxWidth: 500
        }}
      />
    </div>
  );
}
