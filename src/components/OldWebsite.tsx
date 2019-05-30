import { h } from 'preact';
import Button from './ui/Button';
import { T } from '../core/i18n';
import Section from './ui/Section';

export default function OldWebsite() {
  return (
    <Section className="text-center md:px-3 flex flex-wrap" id="oldWebsite">
      <T.span text="oldWebsite.text" className="w-full py-5 text-xl" />

      <Button color="blue-600">{T.translate('oldWebsite.button')}</Button>
    </Section>
  );
}
