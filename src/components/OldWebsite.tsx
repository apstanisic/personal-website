import { h } from 'preact';
import Button from './ui/Button';
import { T } from '../core/i18n';
import Section from './ui/Section';

export default function OldWebsite() {
  return (
    <Section className="text-center md:px-3 flex flex-col" id="old-website">
      <T.span
        text="oldWebsite.text"
        className="w-full lg:w-2/3 lg:mx-auto py-5 text-xl md:text-2xl"
      />

      <Button color="bg-blue-600" className="text-xl mt-1">
        {T.translate('oldWebsite.button')}
      </Button>
    </Section>
  );
}
