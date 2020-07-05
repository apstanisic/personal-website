import { h } from "preact";

interface Props extends Partial<HTMLDivElement> {
  children?: any;
  bg?: string;
}

export default function Section({ children, bg, ...props }: Props) {
  return (
    <div className={`w-full py-6 sm:py-10 px-3 ${bg || ""}`}>
      {/*
      // @ts-ignore */}
      <div {...props} className={`container mx-auto ${props.className ? props.className : ""}`}>
        {children}
      </div>
    </div>
  );
}
