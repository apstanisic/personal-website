import { h } from 'preact';
import { T } from '../core/i18n';
import Button from './ui/Button';
import { ThemeState } from '../core/state';

const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                 py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

export default function Contact() {
  const { theme } = ThemeState.useContainer();

  return (
    <div className={'w-full ' + (theme === 'light' ? 'bg-gray-200' : '')}>
      <div className="container mx-auto lg:w-3/4">
        <div className="text-4xl text-center pt-5">
          <T.span text="contact.title" />
        </div>
        <form className="flex flex-col p-3">
          <label className="py-2 md:flex ">
            <div class="text-xl p-1 pr-5 md:w-1/3 md:text-right">
              <T.span text="contact.name" />
            </div>
            <input
              type="text"
              required
              className={classes}
              placeholder="Petar Petrovic"
            />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/3  md:text-right">
              <T.span text="contact.email" />
            </div>
            <input
              type="email"
              required
              className={classes}
              placeholder="petar@example.com"
            />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/3  md:text-right">
              <T.span text="contact.message" />
            </div>
            <textarea
              required
              className={classes}
              rows={8}
              placeholder={T.translate('contact.placeholder')}
              style={{ resize: 'none' }}
            />
          </label>
          <Button>
            <T.span text="contact.send" />
          </Button>
        </form>
      </div>
    </div>
  );
}
