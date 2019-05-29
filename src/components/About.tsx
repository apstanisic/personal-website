import { h } from 'preact';
import image from '../assets/aleksandar.jpg';
import { T } from '../core/i18n';
import { ThemeState } from '../core/state';

export default function About() {
  const { theme } = ThemeState.useContainer();
  return (
    <div className={'  py-4 ' + (theme === 'light' ? 'bg-blue-700' : '')}>
      <div className="lg:flex container mx-auto">
        <div className="text-xl md:text-2xl p-4 pb-8 sm:p-6 text-center text-white lg:w-2/3 center text-shadow">
          <T.span text="about.text" />
        </div>
        <div className="md:py-6 pb-6 mx-5 lg:w-1/3">
          <img
            src={image}
            alt="Aleksandar"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
