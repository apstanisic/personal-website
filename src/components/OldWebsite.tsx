import { h } from "preact";
import { useT } from "../core/i18n";
import Button from "./common/Button";
import Section from "./common/Section";

export function OldWebsite() {
  const t = useT();
  function goToOldWebsite() {
    window.location.href = "https://v1.aleksandarstanisic.com";
  }

  return (
    <Section className="text-center md:px-3 flex flex-col" id="old-website">
      <span className="w-full lg:w-2/3 lg:mx-auto py-5 text-xl md:text-2xl">
        {t("oldWebsite.text")}
      </span>

      <Button onClick={goToOldWebsite} color="bg-blue-600" className="text-xl">
        <span>{t("oldWebsite.button")}</span>
      </Button>
    </Section>
  );
}
