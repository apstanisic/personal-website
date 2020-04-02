import { h } from "preact";
import { Lang } from "./i18n";
import { Theme } from "./theme";
import { Ui } from "./ui";

export function AppContext(props: { children: any }) {
  return (
    <Lang>
      <Theme>
        <Ui>{props.children}</Ui>
      </Theme>
    </Lang>
  );
}
