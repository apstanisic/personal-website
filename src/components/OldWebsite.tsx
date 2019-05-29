import { h } from 'preact';
import Button from './ui/Button';
import { T } from '../core/i18n';

export default function OldWebsite() {
  return (
    <div className="py-8 px-2 text-center md:px-3 container mx-auto flex flex-wrap">
      <T.span text="oldWebsite.text" className="w-full py-5 text-xl" />

      <Button color="blue-600">{T.translate('oldWebsite.button')}</Button>
    </div>
  );
}
