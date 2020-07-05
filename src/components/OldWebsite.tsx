import { h } from "preact";
import { Tr } from "../core/i18n";
import Button from "./ui/Button";
import Section from "./ui/Section";

export function OldWebsite() {
  function goToOldWebsite() {
    window.location.href = "https://stanisic-old.netlify.com";
  }

  return (
    <Section className="text-center md:px-3 flex flex-col" id="old-website">
      <span className="w-full lg:w-2/3 lg:mx-auto py-5 text-xl md:text-2xl">
        {Tr("oldWebsite.text")}
      </span>

      <Button onClick={goToOldWebsite} color="bg-blue-600" className="text-xl">
        <span>{Tr("oldWebsite.button")}</span>
      </Button>
    </Section>
  );
}
