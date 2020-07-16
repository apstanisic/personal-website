import { h } from "preact";
import { Section } from "./common/Section";

export function Projects() {
  return (
    <Section className="text-xl flex flex-wrap justify-around" id="projects">
      <div className="w-1/4 h-12 bg-red-400">Nadji auto</div>
      <div className="w-1/4 h-12 bg-red-400">Stores</div>
      <div className="w-1/4 h-12 bg-red-400">Ads</div>
    </Section>
  );
}
